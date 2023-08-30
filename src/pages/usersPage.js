import React from 'react';
import {useLoaderData} from "react-router-dom";
import Users from "../components/users";

const UsersPage = () => {
     const users = useLoaderData();
    console.log(users)

    return (

        <div>
           <h3>Users</h3>
            {users.map(user=><Users key={user.id} data={user}/>)}
        </div>
    );
};

export default UsersPage;