import { createBrowserRouter } from "react-router-dom";
import Home from './../layout/Home.jsx'
import Post from './../component/post/Post.jsx'
import User from './../component/user/UserList.jsx'
import Auth from './../layout/Auth.jsx'
import Login from './../component/Auth/Login.jsx'
import Register from './../component/Auth/Register.jsx'
import UserFriendList from './../component/user/UserFriendList.jsx'
import CategoryList from  '././../component/category /CategoryList.jsx'

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
                },
                {
                    path: '/category',
                    element: <CategoryList/>
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