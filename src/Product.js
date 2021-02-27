import React,{ useState, useEffect } from 'react';
import ProductDetail from '../src/ProductDetail';

const Product = () =>{
    
const [flag,setFlag] = useState(0);
const [product,setProduct] = useState([
    {
        name: 'Mouse',
        description: 'Mouse Description',
        price: '1200',
        category: 'Electronics',
        },
        {
        name: 'Burger',
        description: 'Burger Description',
        price: '250',
        category: 'Food',
        },
        {
        name: 'Books',
        description: 'Books Description',
        price: '100',
        category: 'Education',
        }
    ])

    useEffect(()=>{
       return(()=>{
        <ProductDetail productDetails ={product} />
       }) 
    },[])

    const ProductDetails = ()=>{
        setFlag(flag = 1);
       };


        return (
            <div>
                    <h2>Hello Product Page</h2>
                    {
                       product.map((data,index)=>{
                           
                           return(
                            <div>
                                <h3>{data.name}</h3>
                                <p>{data.price}</p>
                                
                                <button onClick={() =>ProductDetails}>Product Details</button>
                               
                                <hr />
                            </div>
                           ) 
                       })
                    }
                    
            </div>
        )
    
};

export default Product;