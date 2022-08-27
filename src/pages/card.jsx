import React from 'react';
import Card from 'react-bootstrap/Card'

let Note = (props) => {
    return (
        <Card style = {{ width: '18rem' }} bg={'dark'} >
            <Card.Title>{props.fName}   {props.lName}</Card.Title>
            <Card.Text>{props.gender}</Card.Text>
            <Card.Text>{props.balance}</Card.Text>
        </Card>
    )
}
export default Note