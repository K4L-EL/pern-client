import React from 'react';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'


let CollapsedMenu = () => {
    return(
        <Col className= 'Col' sm = {1}>
            <h3>LOGO</h3>
            <ul><Link to = '/about'>About</Link></ul>
               <ul> <Link to = '/user'>User</Link></ul> 
               <ul>  <Link to = '/charts'>Charts</Link></ul> 

        </Col>
    )
}

export default CollapsedMenu;