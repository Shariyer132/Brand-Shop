import { useNavigate } from "react-router-dom";
// import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import Brands from "../Brands/Brands";

const Home = () => {
    // const products = useLoaderData();
    const navigate = useNavigate();
    // console.log(products);
    const handleViewPage = brandName =>{
        navigate(`/products/${brandName}`)
    }

    return (
        <div>
            <Navbar />
            <Header />
            <Brands handleViewPage={handleViewPage} />
            {/* <Brands/> */}
            <Footer />
        </div>
    );
};

export default Home;