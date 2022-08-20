import React from 'react';
import {Link} from 'react-router-dom'


let NavBar = () =>{
    return (
        <div>
            
               <ul><Link to = '/about'>About</Link></ul> 
               <ul> <Link to = '/user'>User</Link></ul> 
               <ul>  <Link to = '/charts'>Charts</Link></ul> 





        </div>
    )
}

export default NavBar;