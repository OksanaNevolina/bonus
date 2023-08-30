import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './App.css'

const App = () => {
  return (
      <div>
      <div className="Zxc">
        <NavLink to={'users'}>user page</NavLink>
        <NavLink to={'posts'}>posts page</NavLink>
        <NavLink to={'comments'}>comments page</NavLink>

      </div>
          <Outlet/>
      </div>
  );
};

export default App;

