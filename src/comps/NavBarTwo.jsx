import React from 'react';
import {Link} from 'react-router-dom'

let NavBarTwo = () => {

return (
    <div>
        <ul><Link to = {`login`}>login</Link></ul>
        <ul><Link to = {`picture`}>picture</Link></ul>
        <ul><Link to = {`profile`}>profile</Link></ul>


    </div>
)

}

export default NavBarTwo;