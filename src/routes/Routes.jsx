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
import MySingleCartDetails from "../pages/MyCart/MySingleCartDetails";

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
                loader: () => fetch('https://coffee-shop-server-eight.vercel.app/products')

            },
            {
                path: "/addProduct",
                element: <PrivateRoutes><AddProduct /></PrivateRoutes>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoutes><UpdateProduct/></PrivateRoutes>,
                loader: ({params})=>fetch(`https://coffee-shop-server-eight.vercel.app/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoutes> <MyCart /></PrivateRoutes>,
                loader: () => fetch('https://coffee-shop-server-eight.vercel.app/cartProducts')
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoutes> <ProductDetails /></PrivateRoutes>,
                loader: () => fetch('https://coffee-shop-server-eight.vercel.app/products')
            },
            {
                path: "/cartProducts/:id",
                element: <MySingleCartDetails/>,
                loader: ()=> fetch('https://coffee-shop-server-eight.vercel.app/cartProducts')
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