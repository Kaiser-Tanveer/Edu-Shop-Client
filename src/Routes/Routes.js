import { createBrowserRouter } from "react-router-dom";
import CatWiseProducts from "../Pages/Home/AllProducts/CatWiseProducts";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import DashboardLayout from "../Shared/Layouts/DashboardLayout/DashboardLayout";
import Main from "../Shared/Layouts/Main/Main";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/Register/LogIn";
import Wishlist from "../Pages/Dashboard/Wishlists/Wishlist";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://edushop-server.vercel.app/categories')
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/products',
                element: <Products />,
                loader: async () => await fetch('https://edushop-server.vercel.app/products')
            },
            {
                path: '/products/:name',
                element: <CatWiseProducts />,
                loader: async ({ params }) => await fetch(`https://edushop-server.vercel.app/products/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: async ({ params }) => await fetch(`https://edushop-server.vercel.app/product/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyOrders />,
                        loader: () => fetch('https://edushop-server.vercel.app/dashboard/myProducts')
                    },
                    {
                        path: '/dashboard/wishlists',
                        element: <Wishlist />,
                        loader: () => fetch(`https://edushop-server.vercel.app/dashboard/wishlists`)
                    },
                ]
            },
        ]
    }
])

export default router;