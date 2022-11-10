import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServicePageDetail from "../Pages/ServiceDetailPage/ServicePageDetail/ServicePageDetail";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader : () => fetch('http://localhost:5000/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader : () => fetch('http://localhost:5000/blogs')
            },
            {
                path: `/services/:id`,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServicePageDetail></ServicePageDetail>,
            },
            {
                path: `/addservice`,
                element: <AddService></AddService>
            },
            {
                path: `/myreviews`,
                element: <MyReviews></MyReviews>
            },

        ]
    }
])

export default router;