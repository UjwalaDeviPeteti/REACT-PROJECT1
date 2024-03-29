import logo from './logo.svg';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import First from './First';
import Navbar from './Component/Navbar/Navbar';
import Login from './Component/Login/Login';
import Main from './Component/Main/Main';
import Home from './Component/Home/Home'
import Register from './Component/Register/Register';

import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Bikes from './Component/Bikes/Bikes';
import Cars from './Component/Cars/Cars';
import Services from './Component/Services/Services';
import Logout from './Component/Logout/Logout';


function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<Main/>}></Route>
      <Route exact path="/Navbar" element={<Navbar/>}></Route>
      <Route exact path="/Home" element={<Home/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      <Route exact path="/Register" element={<Register/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
      <Route exact path="/Contact" element={<Contact/>}></Route>
      <Route exact path="/Bikes" element={<Bikes/>}></Route>
      <Route exact path="/Cars" element={<Cars/>}></Route>
      <Route exact path="/Services" element={<Services/>}></Route>
      <Route exact path="/Logout" element={<Logout/>}></Route>
    </Routes>
  );
}

export default App;
