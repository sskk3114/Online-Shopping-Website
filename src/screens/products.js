import './products.css';
import axios from '../axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import React from 'react';

function Products() {
    // const products = [
    //     {
    //         id: 'P0001',
    //         name: 'POCO M3 (Power Black, 128 GB)',
    //         imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
    //         specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
    //             '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
    //         price: '₹11,999'
    //     },
    //     {
    //         id: 'P0002',
    //         name: 'Redmi 9 Prime (Space Blue, 64 GB)',
    //         imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70',
    //         specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
    //             '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
    //         price: '₹11,999'
    //     },
    //     {
    //         id: 'P0003',
    //         name: 'APPLE iPhone 11 (White, 64 GB)',
    //         imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kgiaykw0/mobile/3/x/e/apple-iphone-11-mhdc3hn-a-original-imafwqepx5yxwctc.jpeg?q=70',
    //         specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
    //             '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
    //         price: '₹11,999'
    //     },
    //     {
    //         id: 'P0004',
    //         name: 'POCO M3 (Power Black, 128 GB)',
    //         imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
    //         specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
    //             '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
    //         price: '₹11,999'
    //     },
    //     {
    //         id: 'P0005',
    //         name: 'realme C12 (Power Blue, 32 GB)',
    //         imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/k/q/t/realme-c12-rmx2189-original-imafupuyk9wynufy.jpeg?q=70',
    //         specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
    //             '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
    //         price: '₹11,999'
    //     }
    // ]
   
    const [products,setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
        
    }, []);

    const getAllProducts = () =>{
        axios.get('v1/products').then((response)=>{
            console.log(response)
            if(response && response.data.data){
                setProducts(response.data.data);
            }
        }).catch((error)=>{

        });
    }
    const addToCart = (product)=>{
        console.log(product);
        if(localStorage.getItem('dl-products')){
            const products = JSON.parse(localStorage.getItem('dl-products'));
            let isfound=false;
            products.forEach(prod =>{
                if(prod._id === product._id){
                    prod.quantity+=1;
                    prod.price= Number(prod.price);
                    isfound = true;
                }
            });
            if (isfound){
                alert('Updated successfully');
            }else{
                products.push({...product,quantity: 1, price: Number(product.price)});
                alert('Add Successfully');
            }
            localStorage.setItem('dl-products',JSON.stringify(products));
        } else{
            const products =[];
            products.push({...product,quantity: 1,price: Number(product.price)});
            localStorage.setItem('dl-products',JSON.stringify(products));
            alert('Add Successfully');
        }
    };

    return (
        <div className="container products my-4">
            {products.map((product, index) => (
                <div className="row my-4 border-bottom border-primary pb-3" key={index + 1}>
                    <div className="col-sm-3">
                        <img src={product.imgSrc} />
                    </div>
                    <div className="col-sm-6">
                        <Link to={`/specific-product/${product.id}/description`}><h4>{product.name}</h4></Link>
                        <ul className="list-group specifications">
                            {product.specifications.map((specification) => (
                                <li className="list-group-item" key={specification}>{specification}</li>
                            ))}
                            {/* <li class="list-group-item">16.59 cm (6.53 inch) Full HD+ Display</li>
                            <li class="list-group-item">48MP + 2MP + 2MP | 8MP Front Camera</li>
                            <li class="list-group-item">6000 mAh Lithium-ion Polymer Battery</li>
                            <li class="list-group-item">Qualcomm Snapdragon 662 Processor</li> */}
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>₹{product.price}</h5>
                        <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Products;