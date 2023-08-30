import React from 'react';
import {NavLink} from "react-router-dom";

const Posts = ({data}) => {
    const {title}=data
    return (
        <div>
            <NavLink to={`${data.id}`} state={{...data}}>
            <h5>{title}</h5>
            <hr/>
        </NavLink>
        </div>
    );
};

export default Posts;