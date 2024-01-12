import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Price from "../pages/Price";
import News from "../pages/News";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import NewsInformation from "../pages/NewsInformation";
import AltynAfghanIntro from "../pages/intro/AltynAfghanIntro";
import AltynGroup from "../pages/intro/AltynGroup";
import Chart from "../pages/Chart";
import CompanyAltynRail from "../companies/CompanyAltynRail";
import NewsItem from "../pages/NewsItem";


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
    {
        path: "/News/Information",
        element: <NewsInformation />,
    },
    {
        path: "/pages/about/afghan",
        element: <AltynAfghanIntro />,
    },
    {
        path: "/pages/about/group",
        element: <AltynGroup />,
    },
    {
        path: "/chart",
        element: <Chart />,
    },
    {
        path: "/companies/altyn-rail",
        element: <CompanyAltynRail />,
    },
    {
        path: "/news-item/:newsId/*",
        element: <NewsItem />,
    }
])
export default router