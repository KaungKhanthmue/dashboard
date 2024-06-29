import { createBrowserRouter } from "react-router-dom";
import Home from './../layout/Home.jsx'
import Post from './../component/Post.jsx'
import User from './../component/UserTable.jsx'
import Auth from './../layout/Auth.jsx'
import Login from './../component/Auth/Login.jsx'
import Register from './../component/Auth/Register.jsx'
import UserFriendList from './../component/UserFriendList.jsx'

const  router =  createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
            children: [ 
                {
                    path: '/post',
                    element: <Post/>
                },
                {
                    path: '/user',
                    element: <User/>
                },
                {
                    path: '/user/:id',
                    element: <UserFriendList/>,
                }

            ],
        },
        {
            path: 'auth',
            element: <Auth/>,
            children: [
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'register',
                    element: <Register/>
                }
            ]
        }



    ]);

export default router;