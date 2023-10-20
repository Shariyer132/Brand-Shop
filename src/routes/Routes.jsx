import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import BrandsDetails from "../pages/Brands/BrandsDetails";
import ProductDetails from "../pages/Brands/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products/:brandName",
                element: <BrandsDetails />,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: "/addProduct",
                element: <PrivateRoutes><AddProduct /></PrivateRoutes>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct/>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoutes> <MyCart /></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/cartProducts')
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoutes> <ProductDetails /></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }

]);

export default router;