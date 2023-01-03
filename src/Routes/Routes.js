import { createBrowserRouter } from "react-router-dom";
import CatWiseProducts from "../Pages/Home/AllProducts/CatWiseProducts";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import DashboardLayout from "../Shared/Layouts/DashboardLayout/DashboardLayout";
import Main from "../Shared/Layouts/Main/Main";
import MyProducts from "../Pages/Dashboard/MyProducts";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/Register/LogIn";

const router = createBrowserRouter([
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
                        path: '/dashboard/myProducts',
                        element: <MyProducts />,
                        loader: () => fetch('http://localhost:5000/dashboard/myProducts')
                    },
                    {
                        path: '/dashboard/myProducts',
                        element: <MyProducts />,
                    },
                ]
            },
        ]
    }
])

export default router;