import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

/**
 * It returns a Navbar component with a container component inside of it.
 * @returns A React element.
 */
let NavBar = () =>{
    return (
       
            <Navbar>

               <ul><Link to = '/about'>About</Link></ul>
               <ul> <Link to = '/user'>User</Link></ul> 
               <ul>  <Link to = '/charts'>Charts</Link></ul> 
        

            </Navbar>
     
    )
}

export default NavBar;