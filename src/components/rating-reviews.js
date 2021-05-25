function RatingReviews(props) {
    const products = [
        {
            id: 'P0001',
            name: 'POCO M3 (Power Black, 128 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999',
            description: 'Keep work and entertainment going with the realme C12 smartphone featuring a 6000 mAh battery. It also comes with the Super Power Saving mode that lets you use the basic features of your phone when it is low on charge. What’s more, you can capture your surroundings well with the help of the 13 MP AI triple rear camera. You can make use of the Super Nightscape mode to click stunning pictures even in low-lit conditions.',
            ratingReviews: [
                {
                    rating: 4,
                    review: 'Excellent Product'
                },
                {
                    rating: 3.5,
                    review: 'Good Quality'
                }
            ]
        },
        {
            id: 'P0002',
            name: 'Redmi 9 Prime (Space Blue, 64 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999',
            description: 'Keep work and entertainment going with the realme C12 smartphone featuring a 6000 mAh battery. It also comes with the Super Power Saving mode that lets you use the basic features of your phone when it is low on charge. What’s more, you can capture your surroundings well with the help of the 13 MP AI triple rear camera. You can make use of the Super Nightscape mode to click stunning pictures even in low-lit conditions.',
            ratingReviews: [
                {
                    rating: 3.5,
                    review: 'Excellent'
                },
                {
                    rating: 4.5,
                    review: 'Good'
                }
            ]    
        },
        {
            id: 'P0003',
            name: 'APPLE iPhone 11 (White, 64 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kgiaykw0/mobile/3/x/e/apple-iphone-11-mhdc3hn-a-original-imafwqepx5yxwctc.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999',
            description: 'Keep work and entertainment going with the realme C12 smartphone featuring a 6000 mAh battery. It also comes with the Super Power Saving mode that lets you use the basic features of your phone when it is low on charge. What’s more, you can capture your surroundings well with the help of the 13 MP AI triple rear camera. You can make use of the Super Nightscape mode to click stunning pictures even in low-lit conditions.',
            ratingReviews: [
                {
                    rating: 4,
                    review: 'Excellent Product'
                },
                {
                    rating: 3.5,
                    review: 'Good Quality'
                }
            ]
            
        },
        {
            id: 'P0004',
            name: 'POCO M3 (Power Black, 128 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999',
            description: 'Keep work and entertainment going with the realme C12 smartphone featuring a 6000 mAh battery. It also comes with the Super Power Saving mode that lets you use the basic features of your phone when it is low on charge. What’s more, you can capture your surroundings well with the help of the 13 MP AI triple rear camera. You can make use of the Super Nightscape mode to click stunning pictures even in low-lit conditions.',
            ratingReviews: [
                {
                    rating: 4,
                    review: 'Excellent Product'
                },
                {
                    rating: 3.5,
                    review: 'Good Quality'
                }
            ]
        },
        {
            id: 'P0005',
            name: 'realme C12 (Power Blue, 32 GB)',
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/k/q/t/realme-c12-rmx2189-original-imafupuyk9wynufy.jpeg?q=70',
            specifications: ['6 GB RAM | 128 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) Full HD+ Display',
                '48MP + 2MP + 2MP | 8MP Front Camera', '6000 mAh Lithium-ion Polymer Battery', 'Qualcomm Snapdragon 662 Processor'],
            price: '₹11,999',
            description: 'Keep work and entertainment going with the realme C12 smartphone featuring a 6000 mAh battery. It also comes with the Super Power Saving mode that lets you use the basic features of your phone when it is low on charge. What’s more, you can capture your surroundings well with the help of the 13 MP AI triple rear camera. You can make use of the Super Nightscape mode to click stunning pictures even in low-lit conditions.',
            ratingReviews: [
                {
                    rating: 4,
                    review: 'Excellent Product'
                },
                {
                    rating: 3.5,
                    review: 'Good Quality'
                }
            ]
        }
    ];
    const { match } = props;
    const product = products.find(product => product.id === match.params.productId);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mt-4">
                    {product.ratingReviews.map(rating => (
                        <div className="text-left">
                            <p> Rating: <span className="text-primary">{rating.rating}</span></p>
                            <p> Review: {rating.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RatingReviews;