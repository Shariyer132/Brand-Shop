import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import CartProducts from "./CartProducts";
import Footer from "../../shared/Footer/Footer";

const MyCart = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product=> <CartProducts key={product._id} product={product}></CartProducts>)
                }
            </div>
            <Footer/>
        </div>
    );
};

export default MyCart;