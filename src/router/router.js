import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import CounterApp from "../components/CounterApp";
import  App from "../App";
import Posts from "../pages/Posts";
import Todos from "../pages/Todos";

export const ourRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Root />,
        children: [
    //      /*
            {
                path: '/',
                index: true,
                element: <Shop/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },  
    //     */
           {
            path: '/counter-app',
            element: <App/>
           },

           /*
            // -----> Router Setup for Post 
            {
                path: '/posts',
                element: <Posts/>
            },
            */

             // -----> Router Setup for Todo 
             {
                path: '/todos',
                element: <Todos/>
            }
            
        ]
    }
])