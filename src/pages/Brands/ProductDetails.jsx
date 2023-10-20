import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {

    const [cartItems, setCartItems] = useState([]);

    const products = useLoaderData();
    const { id } = useParams();
    const specificBrandProduct = products.find(product => product._id === id);
    const { photoUrl, name, brandName, type, price, rating, description } = specificBrandProduct;
    const handleAddToCart = (product) => {
        const isProductInCart = cartItems.some(item => item._id === product._id);
        if (isProductInCart) {
            alert('Product is already in the cart.');
        } else {
            setCartItems(prevItems => [...prevItems, product]);
        }

        if (!product) return;

        fetch('http://localhost:5000/cartProducts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product add to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                console.log(data)
            })
            .catch(err => console.error("Error adding to cart:", err));
    }

    return (
        <div className="m-5">
            <div className="card card-side glass shadow-xl">
                <figure className="w-1/3"><img className="w-full h-96" src={photoUrl} alt={specificBrandProduct?.name || "Product"} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-base font-medium">Brand: {brandName}</p>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                    <p>Rate: {rating}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(specificBrandProduct)} className="btn btn-primary btn-outline">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;