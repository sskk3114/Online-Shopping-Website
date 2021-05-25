import {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "../axios";
function CartComponent(){
  
  const [products,setProducts] = useState([]);
  const history = useHistory();
  const iconStyles = {
    backgroundColor:'green',
    color: 'white',
    fontSize:'16px',
    fontWeight: 600,
    padding: '5px 10px',
    cursor:'pointer'
  }
  useEffect(() => {
    if(localStorage.getItem('dl-products')){
      setProducts(JSON.parse(localStorage.getItem('dl-products')))
    }
    
  },[])
  const decrementQuantity=(id)=>{
    const clonedProducts = [...products];
    clonedProducts.forEach(product =>{
      if(product._id=== id){
        product.quantity = product.quantity - 1;
      }
    })
    setProducts(clonedProducts)
    localStorage.setItem('dl-products',JSON.stringify(clonedProducts));
  }
  const incrementQuantity=(id)=>{
    const clonedProducts = [...products];
    clonedProducts.forEach(product =>{
      if(product._id=== id){
        product.quantity = product.quantity + 1;
      }
    })
    setProducts(clonedProducts)
    localStorage.setItem('dl-products',JSON.stringify(clonedProducts));
  }
  const  placeOrder = ()=>{
    const reqBody ={
      products: modifyProducts(),
      totalPrice: calculateTotalPrice(),
      paymentId:'Not required',
      userId: localStorage.getItem('dl-userId')
    }
    console.log(reqBody)
    axios.post('v1/orders/create',reqBody).then((response) =>{
      const {data} = response;
      console.log(data);
      if (data.order){
        alert('Order placed successfully');
        localStorage.removeItem('dl-products');
        history.push('/')
      }
    }).catch(error=>{

    });

  }
  const calculateTotalPrice = () => {
    let totalPrice=0;
    products.forEach(product => {
      totalPrice = totalPrice + (Number(product.price) * product.quantity);
    })
    return totalPrice;
  }
  
  const deleteProduct = (id) => {
    const index = products.findIndex(product => product._id === id);
    if(index !== -1){
      const clonedProducts = [...products];
      clonedProducts.splice(index,1);
      setProducts(clonedProducts);
      localStorage.setItem('dl-products',JSON.stringify(clonedProducts))
      alert('Deleted Successfully')
    }
  }

  const modifyProducts = () =>{
    const modifiedProducts = [];
    products.forEach(product=>{
      modifiedProducts.push({
        id: product._id,
        name: product.name,
        imgSrc: product.imgSrc,
        price: product.price.toString(),
        quantity: product.quantity
      })
    })
    return modifiedProducts
  }
  return(
    <div className="container">
      <div className="row pt-3">
        <div className="col-sm-9">
          <h4 className="text-left">My Cart</h4>
        </div>
        <div className="col-sm-3">
        <button className="btn btn-primary py-2" onClick={placeOrder}>Place Order</button>

        </div>
      </div>
      {products.length>0 ? (
        <div>
          {products.map((product, index) => (
                <div className="row my-4 border-bottom border-primary pb-3" key={index + 1}>
                    <div className="col-sm-3">
                        <img src={product.imgSrc} width="100px" />
                    </div>
                    <div className="col-sm-6">
                        <Link to={`/specific-product/${product.id}/description`}><h4>{product.name}</h4></Link>
                        <ul className="list-group specifications">
                            {product.specifications.map((specification) => (
                                <li className="list-group-item" key={specification}>{specification}</li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>₹{product.price}</h5>
                        <h5>Quantity: <span style={iconStyles} onClick={()=>decrementQuantity(product._id)}>-</span> {product.quantity} <span style={iconStyles} onClick={()=> incrementQuantity(product._id)}>+</span></h5>
                        <h6><i className="fa fa-trash" style={{fontSize: '1.5rem', color: 'red' }} aria-hidden="true" onClick={()=>deleteProduct(product._id)}></i></h6>
                    </div>
                </div>
            ))}
        </div>
      ):(
        <div className="row py-4">
          <div className="col-sm">
            <img width="210px" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"/>
            <h6>Missing Cart items?</h6>
            <p>Login to see the items you added previously</p>
            <button className="btn btn-primary py-2">Login</button>
          </div>
        </div>
      )}
    </div>

  )
  

}

export default CartComponent;