import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import UsersPage from "./pages/usersPage";
import PostsPage from "./pages/postsPage";


import {getAllUsers, getPostsOfCurrentUser} from "./services/apiUsersServices";

import PostsOfUsersPage from "./pages/PostsOfUsersPage";
import {getAllPosts} from "./services/apiPostsServices";
import Comments from "./components/comments";

const routers = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: 'users',
                    element: <UsersPage/>,
                    loader: getAllUsers

                },
                {
                    path: 'posts',
                    element: <PostsPage/>,
                    loader:getAllPosts,
                    children: [
                        {
                            path:':id',
                            element:<Comments/>
                        }
                    ]

                },

                {
                    path:'users/:id',
                    element:<PostsOfUsersPage/>,
                    loader:getPostsOfCurrentUser
                }
            ]


        }
    ]

);
export {
    routers
}