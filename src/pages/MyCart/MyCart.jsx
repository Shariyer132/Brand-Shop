import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import CartProducts from "./CartProducts";

const MyCart = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    products.map(product=> <CartProducts key={product._id} product={product}></CartProducts>)
                }
            </div>
        </div>
    );
};

export default MyCart;