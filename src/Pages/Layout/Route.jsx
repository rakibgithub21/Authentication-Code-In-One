import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import Home from "../Home";
import Login from "./Login";
import Register from "../Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    },
]);