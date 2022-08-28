import React, {useState, useEffect} from 'react';
import Note from '../card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const  axios = require('axios').default




let Login = () => {
    const [data, setData] = useState([{}])
    const [toggle, setToggle] = useState(false)

let getData = () => {
    axios.get('http://nodeserver-env-1.eba-qqjyacfm.eu-west-2.elasticbeanstalk.com/get')
    .then((res) => setData(res.data))
    setToggle(!toggle)
}
    // useEffect(() => getData,[data])
    return(
        <div>
            <Row>
            <button onClick={getData}>GET DATA</button>
            </Row>
            <Row>
            {console.log(data)}
            {toggle?data.map( e =><Col><Note key= {e.id} fName= {e.first_name} lName = {e.last_name} gender={e.gender} balance = {e.balance} /></Col>):null}
            </Row>
        </div>
    )
}
export default Login;