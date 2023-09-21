import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Price from "../pages/Price";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Services",
        element: <Services />,
    },
    {
        path: "/Price",
        element: <Price />,
    },
])
export default router