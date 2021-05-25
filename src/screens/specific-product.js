import { Route, Link } from 'react-router-dom';
import ProductDescription from '../components/product-description';
import RatingReviews from '../components/rating-reviews';

function SpecificProduct(props) {
    const products = [
        {
            id: 'P0001',
            name: 'POCO M3 (Power Black, 128 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999'
        },
        {
            id: 'P0002',
            name: 'Redmi 9 Prime (Space Blue, 64 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999'
        },
        {
            id: 'P0003',
            name: 'APPLE iPhone 11 (White, 64 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kgiaykw0/mobile/3/x/e/apple-iphone-11-mhdc3hn-a-original-imafwqepx5yxwctc.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999'
        },
        {
            id: 'P0004',
            name: 'POCO M3 (Power Black, 128 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999'
        },
        {
            id: 'P0005',
            name: 'realme C12 (Power Blue, 32 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/k/q/t/realme-c12-rmx2189-original-imafupuyk9wynufy.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999'
        }
    ];
    const {match} = props;
    const product = products.find(product => product.id === match.params.productId);
    console.log(`${match.url}/description`);
    return (
        <div>
            {product ? (
            <div className="container products my-4">
            <div className="row my-4 border-bottom border-primary pb-3" >
                <div className="col-sm-3">
                    <img src={product.imgSrc} />
                </div>
                <div className="col-sm-6">
                    <h4>{product.name}</h4>
                    <ul className="list-group specifications">
                        {product.specifications.map((specification) => (
                            <li className="list-group-item" key={specification}>{specification}</li>
                        ))}                            
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>{product.price}</h5>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">                    
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={`${match.url}/description`}>Description <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to={`${match.url}/rating-reviews`} >{'Rating & Reviews'}</Link>
                            </li>                        
                            </ul>                        
                        </div>
                    </nav>
                    <Route path={`${match.path}/description`} component={ProductDescription} exact></Route>
                    <Route path={`${match.path}/rating-reviews`} component={RatingReviews} exact></Route>
                </div>
            </div>
        </div>
        ) : (
            <div className="container my-4"><h2>No matching product</h2></div>
        )}
        </div>
    )
}

export default SpecificProduct;