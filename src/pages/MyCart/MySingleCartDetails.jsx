import { Link, useLoaderData, useParams } from "react-router-dom";

const MySingleCartDetails = () => {
    
    const products = useLoaderData();
    const { id } = useParams();
    const specificCartProduct = products.find(product => product._id === id);
    const { photoUrl, name, brandName, type, price, rating, description } = specificCartProduct;
    return (
        <div className="m-5">
        <div className="card card-side glass shadow-xl">
            <figure className="w-1/3"><img className="w-full h-96" src={photoUrl} alt={specificCartProduct?.name || "Product"} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-base font-medium">Brand: {brandName}</p>
                <p>Type: {type}</p>
                <p>Price: ${price}</p>
                <p>Rate: {rating}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                   <Link to="/myCart"> <button className="btn btn-primary btn-outline">Back to Cart</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MySingleCartDetails;