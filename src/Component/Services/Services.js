/*import './Services.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Services() {
  const [formData, setFormData] = useState({
    policyholderName: '',
    policyholderEmail: '',
    vehicleModel: '',
    vehicleYear: '',
    policyNumber: '',
    coverageType: 'basic', // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit', { // Update URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success, e.g., show a success message or redirect to another page
      console.log('Form data submitted successfully');
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };
  
  
  

  return (
    <>
      <Navbar />
      <h1 className='hj'><marquee className="lpl">Enter Your Details</marquee></h1>
      <div className='forms'>
      <div className="form-container">
        <form className="jo" onSubmit={handleSubmit1}>
          {/* Policyholder Information */   
          /*<div className="form-group">
            <label htmlFor="policyholderName">Policyholder Name:</label>
            <input type="text" id="policyholderName" name="policyholderName" value={formData.policyholderName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="policyholderEmail">Policyholder Email:</label>
            <input type="email" id="policyholderEmail" name="policyholderEmail" value={formData.policyholderEmail} onChange={handleChange} required />
          </div>

          {/* Vehicle Information */
          /*<div className="form-group">
            <label htmlFor="vehicleModel">Vehicle Model:</label>
            <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="vehicleYear">Vehicle Year:</label>
            <input type="number" id="vehicleYear" name="vehicleYear" min="1900" max="2099" value={formData.vehicleYear} onChange={handleChange} required />
          </div>

          {/* Insurance Details */
          /*<div className="form-group">
            <label htmlFor="policyNumber">Policy Number:</label>
            <input type="text" id="policyNumber" name="policyNumber" value={formData.policyNumber} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="coverageType">Coverage Type:</label>
            <select id="coverageType" name="coverageType" value={formData.coverageType} onChange={handleChange} required>
              <option value="basic">Two wheeler</option>
              <option value="comprehensive">Four wheeler</option>
              {/* Add more options as needed */
           /* </select>
          </div>

          {/* Submit Button */
          /*<button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default Services;*/























// import './Services.css'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '../Navbar/Navbar'

// function Services() {
//   const [formData, setFormData] = useState({
//     policyholderName: '',
//     policyholderEmail: '',
//     vehicleModel: '',
//     vehicleYear: '',
//     policyNumber: '',
//     coverageType: 'basic', // Default value
//   });
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       // Handle success
//       setSuccessMessage('Form data submitted successfully');
//       // Clear the form data
//       setFormData({
//         policyholderName: '',
//         policyholderEmail: '',
//         vehicleModel: '',
//         vehicleYear: '',
//         policyNumber: '',
//         coverageType: 'basic', // Default value
//       });
//     } catch (error) {
//       console.error('There was a problem with your fetch operation:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <h1 className='hj'>Enter Your Details</h1>
//       <div className='forms'>
//         {successMessage && <div className="success-message">{successMessage}</div>}
//         <div className="form-container">
//           <form className="jo" onSubmit={handleSubmit}>
//             {/* Policyholder Information */}
//            <div className="form-group">
//               <label htmlFor="policyholderName">Policyholder Name:</label>
//               <input type="text" id="policyholderName" name="policyholderName" value={formData.policyholderName} onChange={handleChange} required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="policyholderEmail">Policyholder Email:</label>
//               <input type="email" id="policyholderEmail" name="policyholderEmail" value={formData.policyholderEmail} onChange={handleChange} required />
//             </div>

//             {/* Vehicle Information */}
//            <div className="form-group">
//               <label htmlFor="vehicleModel">Vehicle Model:</label>
//               <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="vehicleYear">Vehicle Year:</label>
//               <input type="number" id="vehicleYear" name="vehicleYear" min="1900" max="2099" value={formData.vehicleYear} onChange={handleChange} required />
//             </div>

//             {/* Insurance Details */}
//            <div className="form-group">
//               <label htmlFor="policyNumber">Policy Number:</label>
//               <input type="text" id="policyNumber" name="policyNumber" value={formData.policyNumber} onChange={handleChange} required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="coverageType">Coverage Type:</label>
//               <select id="coverageType" name="coverageType" value={formData.coverageType} onChange={handleChange} required>
//                 <option value="basic">Two wheeler</option>
//                 <option value="comprehensive">Four wheeler</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>

//             {/* Submit Button */}
//             <button id="btn3" type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Services;





































































import './Services.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Services() {
  const [formData, setFormData] = useState({
    policyholderName: '',
    policyholderEmail: '',
    vehicleModel: '',
    vehicleYear: '',
    policyNumber: '',
    coverageType: 'basic', // Default value
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success
      setSuccessMessage('Form data submitted successfully');
      // Clear the form data
      setFormData({
        policyholderName: '',
        policyholderEmail: '',
        vehicleModel: '',
        vehicleYear: '',
        policyNumber: '',
        coverageType: 'basic', // Default value
      });
      // Print the form data
      printFormData();
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  const printFormData = () => {
    const printContents = `
      <h2>Printed Copy of Form Data</h2>
      <p><strong>Policyholder Name:</strong> ${formData.policyholderName}</p>
      <p><strong>Policyholder Email:</strong> ${formData.policyholderEmail}</p>
      <p><strong>Vehicle Model:</strong> ${formData.vehicleModel}</p>
      <p><strong>Vehicle Year:</strong> ${formData.vehicleYear}</p>
      <p><strong>Policy Number:</strong> ${formData.policyNumber}</p>
      <p><strong>Coverage Type:</strong> ${formData.coverageType}</p>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Printed Copy</title>
          <style>
            /* Add custom styles for printing if needed */
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <Navbar />
      <h1 className='hj'></h1>
      <div className='forms'>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="form-container">
          <form className="jo" onSubmit={handleSubmit}>
            {/* Form inputs */}
            {/* Policyholder Information */}
            <div className="form-group">
              <label htmlFor="policyholderName">Policyholder Name:</label>
              <input type="text" id="policyholderName" name="policyholderName" value={formData.policyholderName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="policyholderEmail">Policyholder Email:</label>
              <input type="email" id="policyholderEmail" name="policyholderEmail" value={formData.policyholderEmail} onChange={handleChange} required />
            </div>

            {/* Vehicle Information */}
            <div className="form-group">
              <label htmlFor="vehicleModel">Vehicle Model:</label>
              <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleYear">Vehicle Year:</label>
              <input type="number" id="vehicleYear" name="vehicleYear" min="1900" max="2099" value={formData.vehicleYear} onChange={handleChange} required />
            </div>

            {/* Insurance Details */}
           <div className="form-group">
              <label htmlFor="policyNumber">Policy Number:</label>
              <input type="text" id="policyNumber" name="policyNumber" value={formData.policyNumber} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="coverageType">Coverage Type:</label>
              <select id="coverageType" name="coverageType" value={formData.coverageType} onChange={handleChange} required>
                <option value="basic">Two wheeler</option>
                <option value="comprehensive">Four wheeler</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Other form inputs */}
            {/* Submit Button */}
            <button id="btn3" type="submit">Submit</button>
            
          </form>
        </div>
      </div>
      {/* Button to trigger printing */}
      <button  className="btn8" onClick={printFormData}>Print Form Data</button>




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
  );
}

export default Services;
















// 







