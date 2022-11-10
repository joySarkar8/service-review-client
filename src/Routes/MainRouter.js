import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReviews/EditReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServicePageDetail from "../Pages/ServiceDetailPage/ServicePageDetail/ServicePageDetail";
import PrivateRoute from "./PrivateRouter";




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
                loader : () => fetch('https://photography-server-nu.vercel.app/services')
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
                loader : () => fetch('https://photography-server-nu.vercel.app/blogs')
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://photography-server-nu.vercel.app/services/${params.id}`),
                element: <ServicePageDetail></ServicePageDetail>,
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/myreviews/edit/:id',
                element: <EditReview></EditReview>
            },

        ]
    }
])

export default router;