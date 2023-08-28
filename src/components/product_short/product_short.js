import React from 'react';
import css from './ProductShort.css'

const ProductShort = ({product:{id,title,description,price,thumbnail },setChoseProduct}) => {
    const onAllProductDetailsClick = () => {

        setChoseProduct(id)
    }
    return (
        <div className='ProductShort'>
            <h3> {id}) {title }</h3>
            <img src={thumbnail} alt="photo"/>
            <hr/>
            <p><i>description </i>: {description}</p>
            <p><i>price </i>: {price} $</p>
            <button onClick={onAllProductDetailsClick}>product details</button>
        </div>
    );
};

export default ProductShort;