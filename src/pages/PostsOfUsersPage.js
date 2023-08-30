import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

const PostsOfUsersPage = () => {
    const posts = useLoaderData();
    const {state} = useLocation();
    console.log(state)

    const {name,phone,username,website}=state
    return (
        <div>
        <div>
           <h3>{name} {username}</h3>
           <h4>{phone}</h4>
           <h5>{website}</h5>
        </div>
            <h1>posts {name}</h1>
            <ul>
                {
                    posts.map(value=><li key={value.id}> {value.title}</li> )
                }
            </ul>

        </div>
    );
};

export default PostsOfUsersPage;