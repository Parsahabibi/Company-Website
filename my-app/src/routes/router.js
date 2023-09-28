import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Price from "../pages/Price";
import News from "../pages/News";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


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
    {
        path: "/News",
        element: <News />,
    },
    {
        path: "/AboutUS",
        element: <AboutUs />,
    },
    {
        path: "/ContactUs",
        element: <ContactUs />,
    },
])
export default router