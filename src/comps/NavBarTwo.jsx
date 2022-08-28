import React from 'react';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

let NavBarTwo = () => {

return (

        <Navbar>

                <ul><Link to = {`login`}>login</Link></ul>
                <ul><Link to = {`picture`}>picture</Link></ul>
                <ul><Link to = {`profile`}>profile</Link></ul>

        </Navbar>


    
)

}

export default NavBarTwo;