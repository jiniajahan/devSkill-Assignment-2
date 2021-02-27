import React from 'react';

const ProductDetail = (props) =>{
        return (
            <div>
               <h1>Product Details Page</h1> 
               <h2>{props.name}</h2>
               <h3>{props.price}</h3>
               <p>{props.description}</p>
               <p>{props.category}</p>
            </div>
        )
    
};

export default ProductDetail;