import React from 'react';
import NavBar from './NavBar'
import Col from 'react-bootstrap/Col'

let SideMenu = () => {
    return (
        <Col className= 'Col' sm = {3}>
        <h1> Welcome!</h1>
       <NavBar />
       </Col>
    )
}

export default SideMenu;