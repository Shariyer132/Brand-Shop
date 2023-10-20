import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const spacificBrandProduct = products.find(product => product._id === id)
    const handleAddToCart = (product) => {
        
        console.log('get product', product);
       fetch('http://localhost:5000/cartProducts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }
    return (
        <div>
            <h2>{spacificBrandProduct.name}</h2>
            <button onClick={()=>handleAddToCart(spacificBrandProduct)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;