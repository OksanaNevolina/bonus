import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import Posts from "../components/posts";

const PostsPage = () => {
    const posts = useLoaderData();
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            {posts.map(post => <Posts key={post.id} data={post}/>)}

        </div>
    );
};


export default PostsPage;
