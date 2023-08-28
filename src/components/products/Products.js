import React, {useEffect,useState} from 'react';
import ProductShort from "../product_short/product_short";
import {setProduct} from "../../apiServices/productsService";
import {getProductById} from "../../apiServices/productsService";
import ProductDetails from "../ProductDetails/ProductDetails";
const Products = () => {
    const [products, setProducts] = useState([]);
     const [chosenProduct, setChosenProduct] = useState(null)
    const setChoseProduct = (prodId) => {
        getProductById(prodId)
            .then(value => {
               setChosenProduct({...value})

            })
    }

    useEffect(()=>{
  setProduct()
            .then(({products}) => {
                    setProducts([...products])
                })
        }
        ,[])
    return (
        <div>
            {chosenProduct &&
                <div>
                    <hr/>
                    <ProductDetails details={chosenProduct}/>
                    <hr/>
                </div>
            }

            <div>
            {
                products.map(value => <ProductShort
                    key={value.id}
                    product={value}
                    setChoseProduct={setChoseProduct}
                /> )
            }
            </div>
        </div>

    );
};

export default Products;