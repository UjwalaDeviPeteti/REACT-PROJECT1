import './Bikes.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
function Bikes(){
    return(
        <>
         <Navbar/>
          <br></br> <br></br> <br></br> 
        <h1 className="ty">Different Types Of Two Wheeler Insurances Are Available</h1>
        <div className="container">
            <div className="card">
                <div className="im">
                    <img id="ir1"src="https://s3.amazonaws.com/the-drive-staging/message-editor/1541609846592-w8002.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                <p> KAWASAKI</p>Check out the latest and best new bikes in India along with detailed prices and offers only on ZigWheels. You can search new bikes by brand like TVS, Honda, Royal Enfield, Hero, Yamaha and many more.
                </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://moneyinc.com/wp-content/uploads/2018/06/Yamaha-Motorcycles-5.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                 <p>YAMAHA</p>Yamaha Motor Company is a Japanese mobility manufacturer that produces motorcycles, motorboats, outboard motors, and other motorized products.
                </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="http://www.totalmotorcycle.com/wp-content/uploads/2017/01/2018-Suzuki-GSX250R5.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>SUZUKI GSX108</p>The Suzuki Gixxer FI 150 is a 154.9 cc (9.45 cu in) naked motorcycle from Suzuki. The bike was launched in September 2014. The name derives from a nickname used in Britain and elsewhere for Suzuki GSX-S150 because of similarity in design.</div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/08/00-1-19.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
                <p>HONDA</p>Find out the latest prices, specifications, images and offers of Honda bikes in India. Compare models, check upcoming launches and read reviews of Honda scooters and motorcycles. </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>

        </div>




        <div className="container">
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://ultimatemotorcycling.com/wp-content/uploads/2019/06/2020-Honda-Activa-125-First-Look-2.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>HONDA ACTIVA</p>Honda has launched the new Activa Std, Activa Dlx and Activa H-Smart with latest technological innovation. It is equipped with the new eSP technology along with incredible new features like the bikes.</div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1" src="https://tse3.mm.bing.net/th?id=OIP.wUl226_twkc4dr0XqdhKpQHaE7&pid=Api&P=0&h=180" width="250" height="200"></img>
                </div>
                <div className="tt">
                <p>ROAD BIKES</p>Road Bikes. Make our road bike your comrade for vanquishing long routes and overthrowing the wind. It’s a champ at speed training to build unbeatable efficiency. </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1"src="https://kickstart.bikeexif.com/wp-content/uploads/2019/09/classic-honda-restoration.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>BIKES EXIF</p> Find the latest and most popular bike models across all segments in India for February 2024. Compare prices, features and specifications of Yamaha, Hero, Royal Enfield, Honda, TVS </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>
            <div className="card">
                <div className="im">
                    <img id="ir1"src="http://thewowstyle.com/wp-content/uploads/2015/01/Royal-Enfield-Classic-500_002.jpg" width="250" height="200"></img>
                </div>
                <div className="tt">
               <p>ROYAL ENFIELD</p> Royal Enfield is an Indian multinational motorcycle manufacturing company, headquartered in Chennai. The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production. </div>
                <div className="bo">
                    <button className='cd'><Link id='ml' to="/Services">Learn More</Link></button>
                </div>
            </div>

        </div>



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

export default Bikes