import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import About from '../About/About';
import Navbar from '../Navbar/Navbar'
import './Home.css'
function Home(){
    return(
        <>
        <Navbar/>
        <section>
       
         <div className="c">
            <h1 className="r">Welcome To Our Website</h1>
            <div className="l">
                <button className="ba"><Link id="rf" to="/About">Exploring Now</Link></button>
            </div>


            </div>
            <Routes>
            <Route exact path='/About' element={<About/>}></Route></Routes>
            <div className="v">
                <div className="m">
                <img  height="750" width="900"src="https://tomneedhaminsurance.com/wp-content/uploads/2016/06/Insurance-Policy-Review.jpg"></img></div>
                <div className="h">
                <h1 className="di">Different Types of Insurance Policies in India</h1>
                <p id="w">Accidents or losses of any kind, including death, are the formidable realities that come uninvited, without a knock on the door, and turn our lives upside down. While there is absolutely nothing that we can do to stop these uncertainties, we can certainly make our lives shockproof. </p>
                <p  id="w">Insurance is a tool that provides us with much-needed protection from uncertainties. Now, selecting the correct type of insurance with the right amount is one prudent decision we need to make to safeguard our assets or financial stability. </p>
                <p  id="w">Basically, an insurance that does not lie in the ambit of Life Insurance is General Insurance.

General Insurance provides coverage against any financial loss incurred due to any loss or destruction of the insured asset. It safeguards your assets like a Bike, Car, Home, Travel, Health, or even your beloved electronic gadgets from any loss.</p>
<p  id="w">A comprehensive insurance that provides complete protection against all risks associated with engineering and machinery, like the risk faced by the ongoing construction project, installation project and machines and equipment in project operation. It includes the following insurance</p>
                </div>
            </div>


            <div className="ca">
                <h1 className="fo"><marquee scrollamount="14">Insurances That Are Available</marquee></h1>
                <h1 className="fo"><Link id="in" to="/Cars">Four Wheeler Insurances</Link></h1>
                <img className="ww" width="1500"src="https://www.policybachat.com/ArticlesImages/1436.jpg"></img>
            </div>


        
            <div className="v">
                <div className="m">
                <img  height="600" width="900"src="https://is-amazing.com/wp-content/uploads/2020/05/four-wheeler-insurance-585x288.jpg"></img></div>
                <div className="h">
                <h2 className="ih">Four Wheeler Insurance Policies in India</h2>
                <p id="w">Four-wheeler insurance in India is not just a legal obligation but also a critical safeguard for vehicle owners. In a country with a rapidly increasing population and diverse road conditions, understanding the dynamics of insurance prices is paramount. </p>
                <p  id="w"> It goes beyond mere cost considerations; it is about ensuring financial security, peace of mind, and responsible vehicle ownership. In this article, we delve into the intricacies of four-wheeler insurance prices in India, shedding light on the factors, trends, and tips that can help you navigate this essential aspect of owning a vehicle in the subcontinent.  </p>
                <p  id="w">Basically, an insurance that does not lie in the ambit of Life Insurance is General Insurance.

General Insurance provides coverage against any financial loss incurred due to any loss or destruction of the insured asset. It safeguards your assets like a Bike, Car, Home, Travel, Health, or even your beloved electronic gadgets from any loss.</p>

                </div>
            </div>





            <div className="ca">
                
                <h1 className="fo"><Link id="in" to="/Bikes">Two Wheeler Insurances</Link></h1>
                <img className="ww" width="1500"src="https://www.probusinsurance.com/wp-content/uploads/2020/02/Two-Wheeler.jpg"></img>
            </div>
               

            <div className="v">
                
                <div className="h">
                <h1 className="ih">Two Wheeler Insurance Policies in India</h1>
                <p id="w">Two-wheeler insurance policies consist of 2 types - comprehensive and third party liability. Comprehensive insurance covers your bike against theft, damage or a calamity along with cover against any third party liability. On the other hand, third party liability, which is a mandatory cover, protects your vehicle against third party liability in terms of death, bodily injury and third party property damage. </p>
                <p  id="w"> It goes beyond mere cost considerations; it is about ensuring financial security, peace of mind, and responsible vehicle ownership. In this article, we delve into the intricacies of four-wheeler insurance prices in India, shedding light on the factors, trends, and tips that can help you navigate this essential aspect of owning a vehicle in the subcontinent.  </p>
                <p  id="w">Basically, an insurance that does not lie in the ambit of Life Insurance is General Insurance.

General Insurance provides coverage against any financial loss incurred due to any loss or destruction of the insured asset. It safeguards your assets like a Bike, Car, Home, Travel, Health, or even your beloved electronic gadgets from any loss.</p>

                </div>
                <div className="m">
                <img  height="750" width="800"src="https://healthnewsreporting.com/wp-content/uploads/2019/01/national-insurance-two-wheeler.jpg"></img></div>
            </div>

            </section>
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
export default Home