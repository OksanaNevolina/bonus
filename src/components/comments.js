import React from 'react';
import {useLocation} from "react-router-dom";

const Comments = () => {
    const {state:{body,id,title,userId}} = useLocation();
       return (
        <div>
            <p>body :<i> {body}</i></p>
            <p>title : <i>{title}</i> </p>
            <h3>id <i>{id}</i> </h3>
            <h2>userId <i>{userId}</i> </h2>
        </div>
    );
};

export default Comments;