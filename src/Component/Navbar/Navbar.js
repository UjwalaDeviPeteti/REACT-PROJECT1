import {Routes,Route,Link} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Cars from '../Cars/Cars';
import Bikes from '../Bikes/Bikes';
import Register from '../Register/Register';
import Logout from '../Logout/Logout';
import './Navbar.css';
function Navbar(){
    return(
        <>
<header>

<div className='b'>
<img className="e" src="https://tse4.mm.bing.net/th?id=OIP.XT5IcHLx3rjp5gxWioLWhQHaGR&pid=Api&P=0&h=180"
     alt="no" width="18" height="10" align="left" ></img>
 
    <Link id="o" to="/Home"><i class="fa-solid fa-house fa-shake"></i>Home</Link>
    <Link id="o" to="/About"><i class="fa-solid fa-address-card fa-shake"></i>About</Link>
    <Link id="o" to="/Cars">Four Wheelers</Link>
    <Link id="o" to="/Bikes">Two Wheelers</Link>
    <Link id="o" to="/Contact"><i class="fa-duotone fa-address-book fa-shake"></i>Contact</Link>
    <Link id="o" to="/Logout"><i class="fa-solid fa-right-to-bracket fa-shake"></i>Logout</Link>
    
    </div>
    <Routes>
        <Route exact path='/Home' element={<Home/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/Cars' element={<Cars/>}></Route>
        <Route exact path="/Bikes" element={<Bikes/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/Logout" element={<Home/>}></Route>
        
    </Routes>

</header>
<section>

</section>



        </>
    )
}

export default Navbar