import { Routes,Link,Route } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import './Main.css'
function Main(){
    return(
        <>
        
        <div className='hg'>
            <div className="lp">
            <div className='ik'>
        <Link id="lk" to="/Login"><i class="fa-solid fa-right-to-bracket fa-shake"></i>Login</Link>
    <Link id="lk" to="/Register"><i class="fa-solid fa-right-to-bracket fa-shake"></i>Register</Link>
    </div>
    </div>
    </div>

    <Routes>
    <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Register" element={<Register/>}></Route></Routes>
       
    
        </>
    )
}
export default Main;