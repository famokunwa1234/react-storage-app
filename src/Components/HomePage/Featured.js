import React from 'react'
import Product from "../Product";
import {Link} from "react-router-dom";
import Title from "../Title";
import {ProductConsumer} from "../../Context";

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                {/* Title */}
            <Title title="featured product" center="true" />
            {/* product */}
            <div className="row">
                <ProductConsumer>
                {value => {
                const { featuredProducts } = value;
                return featuredProducts.map(product =>
                (<Product key={product.id} product={product} />
                ));
                }}
                </ProductConsumer>
            </div>
            <div className="row mt-5">
                <div className="col text-center">
                    <Link to="/products" className="main-link">our Product
                    </Link>
                </div>
            </div>
            </div>
            

        </section>
    )
}

// import React from 'react'

// export default function Featured() {
//     return <h1>hello from featured</h1>
// }


// import React from 'react'
// import Product from "../Product";
// import {Link} from "react-router-dom";
// import Title from "../Title";
// import {ProductConsumer} from "../../Context/Context";
// import { items } from '../../Context/productData';

// export default function Featured() {
//     return (
//         <section className="py-5">
//             <div className="container"> 
//          {/* Title */}
            
//             <Title title="featured product" center="true" />
//             <div className="row">
//                 <ProductConsumer>
//                  {value => {
//                 const { featuredProducts } = value;
//                 return featuredProducts.map(Product =>
//                 (<Product key={Product.id} product={product} />
//                 ));
//                 }}
//                 </ProductConsumer>
//             </div>
//             </div>
            
            
//             </section>
//     )
// }   