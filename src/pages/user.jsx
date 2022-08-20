import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import NavBar from '../comps/NavBar';
import NavBarTwo from '../comps/NavBarTwo';
import Login from './subpages/login'
import Picture from './subpages/picture'
import Profile from './subpages/profile'
let User = () => {

    return (
        <div>
            <h1>This is the user page:</h1>
        <Routes>
            <Route path = 'login' element = {<Login />} />
            <Route path ='picture' element = {<Picture />} />
            <Route path = 'profile' element = {<Profile />} />

        </Routes>
        <NavBarTwo/>
        </div>
    )
}


export default User;