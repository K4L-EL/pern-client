import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import About from './pages/about';
import User from './pages/user';
import Charts from './pages/charts';
import NavBar from './comps/NavBar';

function App() {
  return (
    <div className="App-header">
      <h1> Welcome!</h1>
    <NavBar />
    <Routes>
       <Route path = '/about' element = {<About />} />
       <Route path = '/user' element = {<User />} />
       <Route path = '/charts' element = {<Charts />} />

    </Routes>
    </div>
  );
}

export default App;
