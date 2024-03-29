import './Cars.css';
import {Link,Route,Routes} from 'react-router-dom';
import Services from '../Services/Services';
import Navbar from '../Navbar/Navbar';
function Cars(){
    return(
        <>
         <Navbar/>
         <br></br> <br></br> <br></br>  
          <h1 className="kl">Differnt Policies Are Available On Four Wheeler Vehicles</h1>
          <div className="container">
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://4x4motoring.com/wp-content/uploads/2019/05/creta_limited_front-529202-1920x1296.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                <p> HYUNDAI</p>The new Grand i10 NIOS is an irresistible combination of cutting-edge technology, slick performance, and thoughtful safety for the young and restless. It is a driving force calling you to step in, stand out and add more to life
                </div>
                <div className="bo">
                <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://www.findaluxurycar.com/galleria_images/7768/7768_p2_l.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                 <p>FORD</p>Ford genuine parts are backed by nation-wide Ford service centres. Ford genuine parts are readily available to you no matter where you go.
                </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img  id="ir1" src="http://hdqwalls.com/wallpapers/2018-jeep-wrangler-unlimited-rubicon-eb.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>JEEP</p>Jeep Wrangler is true to its heritage, combining capable features with updated design and materials to deliver a vehicle ready for the future. Available LED headlamps provide improved illumination and a striking appearance.</div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="http://www.hdcarwallpapers.com/walls/2017_subaru_brz-HD.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                <p>SUBARU</p>In Western markets, Subaru vehicles have traditionally attracted a small but devoted core of buyers. The company's marketing targets those who desire its signature engine and drive train, all-wheel drive and rough-road capabilities, or affordable sports car designs.  </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>

        </div>




        <div className="container">
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://www.gannett-cdn.com/-mm-/0a4b63267453ecf91289cd7a00acb90824aef7ca/c=306-542-4928-3154/local/-/media/USATODAY/test/2014/01/13/1389625670000-ft1.JPG?width=3200&height=1809&fit=crop&format=pjpg&auto=webp" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>TOYOTA</p>Toyota was praised for being a leader in the development and sales of more fuel-efficient hybrid electric vehicles, starting with the introduction of the XW10 Toyota Prius in 1997. The company now sells</div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://cimg2.ibsrv.net/cimg/www.dodgeforum.com/1600x900_85-1/862/Untitled-1-200862.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                <p>DODGE</p>The Dodge Challenger SRT Hellcat is a two-door muscle car from the American manufacturer. Here you can find out the Dodge Challenger price in India, specifications, top speed, features</div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://www.theleader.info/wp-content/uploads/2018/01/Kia-Sportage-Alpine.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>KIA</p> There are a total of 4 Kia models currently on sale in India. These include 3 SUVs and 1 MUV. Kia has 4 upcoming car launches in India - the Kia Carnival, Kia Sportage, Kia EV5, Kia EV9. </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://1.bp.blogspot.com/-4yJIL6C4c1w/XrmAIwXuSjI/AAAAAAAAJoE/J05ue1GmPak4p3mtqq3bE4BlVX96pUSLQCLcBGAsYHQ/s1600/Acura%2BNSX%2B2019Screen%2BShot%2B2020-05-11%2Bat%2B6.35.30%2BPM.png" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>ACURA</p>  Acura is the luxury division of Honda . Subcompact executive liftback based on the eleventh-generation Honda Civic . Compact executive sedan succeeding the TL and TSX . Three-row mid-size luxury crossover SUV that shares its platform with the Honda Pilot . Compact luxury crossover SUV related to the Honda CR-V .</div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>

        </div>
        <Routes>
        <Route exact path='/Services' element={<Services/>}></Route>
        
        </Routes>

        <footer>


<h3>Footer of the web page</h3>
            <div class="all">
              <div class="f">
                  <Link id="i" to="/Home"><i class="fa-solid fa-house fa-shake"></i>Home</Link>
                  <p>Pays for repair or replacement of a damaged engine. A handy add-on for those who stay in a region prone to flooding during the rains, or if you own a high-end car.</p> </div>
              <div class="f">
                   <Link id="i" to="/About"><i class="fa-solid fa-address-card fa-shake"></i>About</Link>
                   <p>Gives a daily allowance for alternate travel while your car is repaired at the garage. You can use this money to pay for cab or auto fare. </p></div>
        
              <div class="f">
                    <Link  id="i" to="/Contact"><i class="fa-duotone fa-address-book fa-shake"></i>Contact</Link>
                    <p>Covers personal belongings, such as your laptop, phone and clothes in your car. It has you covered, in case these belongings go missing from your car or get damaged in an accident.</p></div>
              <div class="f">
                    <Link  id="i" to="/Login"><i class="fa-solid fa-right-to-bracket fa-shake"></i>Login</Link>
                    <p> car insurance is easy to buy and renew online. Once you purchase our car insurance policy, we email your policy documents and also send a hard copy by post. You can then drive worry-free.</p> </div>
             </div>
             <div className="ic">
             
             <i  id="fa" class="fa-brands fa-facebook fa-shake"></i>
             <i  id="fa" class="fa-brands fa-instagram"></i>
             <i  id="fa" class="fa-brands fa-youtube"></i>
             <i  id="fa" class="fa-brands fa-telegram"></i>
             </div>
</footer>



        </>
    )
}
export default Cars;