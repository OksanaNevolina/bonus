import React from 'react';
import {useNavigate} from "react-router-dom";


const Users = ({data}) => {
    const {id,name} = data
    const navigate = useNavigate();

    const showPostOfThisUser = () => {

        console.log('bbjhhjggfgh')
        navigate({pathname:`${data.id}`},{state:{...data}});
    }
    return (
        <div>
            {id} - name : {name}
            <button onClick={showPostOfThisUser}>details posts</button>
        </div>
    );
};

export default Users;