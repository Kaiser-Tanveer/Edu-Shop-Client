import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../Pages/Home/AllProducts/AllProducts";
import Home from "../Pages/Home/Home";
import Main from "../Shared/Layouts/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('Categories.json')
            },
        ]
    }
])

export default router;