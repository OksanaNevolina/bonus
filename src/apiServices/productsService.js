const setProduct = () => {
   return  fetch('https://dummyjson.com/products')
        .then(res => res.json())
}
const getProductById = (id) => {
  return  fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
}
const serachProduct = (query) => {
  return  fetch(`https://dummyjson.com/products/${query}`)
      .then(res => res.json())
}
export {
    setProduct,getProductById,serachProduct
}