import './Contact.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import React,{useState} from 'react'
function Contact() {
    const [formData1, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange2 = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit2 = async (e) => {
      e.preventDefault();
      try {
        console.log('Form Data:', formData1); // Log form data before submission
        const response = await fetch('http://localhost:5000/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData1),
        });
        console.log('Response:', response); // Log the response from the backend
        setFormData({ name: '', email: '', message: '' }); // Reset form data after submission
        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      }
    };
  
    return(
        <>
         <Navbar/>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br>
        </br><br>
        </br><br></br><br></br><br></br><br></br>  <br></br>    <br></br> <br></br>   
        <div className="t">
            <div className="lu">
                <h1 className="ab">Contact Us</h1>
                <p className="pa">Name:Ujwala Devi Peteti</p>
                <p className="pa">Email:petetiujwaladevi26@gmail.com</p>
                <p className="pa">Mobile No:7702478429</p>
                <br></br><br></br><br></br>
                <i className="mp"class="fa-brands fa-instagram fa-shake"></i>Instagram<br></br>
                <i  className="mp" class="fa-brands fa-facebook fa-bounce"></i>Facebook<br></br>
                <i className="mp" class="fa-brands fa-linkedin fa-bounce"></i>linkedin<br></br>
                <i className="mp" class="fa-brands fa-square-whatsapp fa-bounce"></i>Whatsapp<br></br>
                <i className="mp" class="fa-brands fa-twitter fa-bounce"></i>Twitter<br></br>



            </div>
            <div className="la">
        <h1 className="av">If you have any queries please contact us</h1>
        <form className="form" onSubmit={handleSubmit2}>
          <div className="pu">
            <label htmlFor="name">Name:</label>
            <input className="ni" type="text" id="name" name="name" value={formData1.name} onChange={handleChange2} required />
          </div>
          <div className="pu">
            <label htmlFor="email">Email:</label>
            <input className="ni" type="email" id="email" name="email" value={formData1.email} onChange={handleChange2} required />
          </div>
          <div className="pu">
            <label htmlFor="message">Message:</label>
            <textarea className="ni" id="message" name="message" value={formData1.message} onChange={handleChange2} required />
          </div>
          <button className="mi" type="submit">SUBMIT</button>
        </form>
      </div>
        </div>
        {/* <div className="mo">
       <img  width="1500" height="600"src="https://images.onlymyhealth.com/imported/images/2019/September/26_Sep_2019/big2usshshsxbxbx.jpg"></img>
       </div> */}
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
export default Contact