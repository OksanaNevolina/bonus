import React from 'react';

const ProductDetails = ({details:{id,title,description,price,discountPercentage,rating,stock,brand,category,images}}) => {
    return (
        <div>
            <h2>{id} {title} {price}$  {brand}</h2>
            <p>{description}</p>
            <div>{discountPercentage}</div>
            <h5>rating {rating}*</h5>
            <h5>stock {stock}</h5>
            <div>{category}</div>
            <div>
                {
                    images.map((url,index)=> <img key={index} src={url}alt="photo"/>)
                }
            </div>


            
        </div>
    );
};

export default ProductDetails;