import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import About from './pages/about';
import User from './pages/user';
import Charts from './pages/charts';
import NavBar from './comps/NavBar';
import NavBarTwo from './comps/NavBarTwo';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const  axios = require('axios').default


function App() {

  axios.get('http://nodeserver-env-1.eba-qqjyacfm.eu-west-2.elasticbeanstalk.com/get')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))


  return (

    <div className="App-header">
      <Container>
        <Col>
      <h1> Welcome!</h1>
        
        </Col>
    <NavBar />
    <Routes>
       <Route path = '/about' element = {<About />} />
       <Route path = '/user/*' element = {<User />} />
       <Route path = '/charts' element = {<Charts />} />
    </Routes>
    </Container>
    </div>
  );
}

export default App;
