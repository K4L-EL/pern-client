import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import About from './pages/about';
import User from './pages/user';
import Charts from './pages/charts';
import NavBar from './comps/NavBar';
import NavBarTwo from './comps/NavBarTwo';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
const  axios = require('axios').default


function App() {

  axios.get('http://nodeserver-env-1.eba-qqjyacfm.eu-west-2.elasticbeanstalk.com/get')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))


  return (

    <div className="App-header">
      <h1> Welcome!</h1>
      <button>test</button>
    <NavBar />
    <Routes>
       <Route path = '/about' element = {<About />} />
       <Route path = '/user/*' element = {<User />} />
       <Route path = '/charts' element = {<Charts />} />

    </Routes>
    </div>
  );
}

export default App;
