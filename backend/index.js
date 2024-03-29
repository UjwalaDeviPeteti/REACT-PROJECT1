// server.js
/*const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/





/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000', // Adjust the port to match your client app
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true 
  
});

const userSchema = new mongoose.Schema({
  Username: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
});

const User = mongoose.model('users', userSchema);

// Signup Endpoint
// Signup Endpoint
app.post('/Register', async (req, res) => {
  const { Username, Email, Password, Confirmpassword } = req.body;


  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ Username }, { Email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Check if passwords match
    if (Password !== Confirmpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create a new user
    const newUser = new User({ Username, Password: hashedPassword, Email });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);

    if (error.code === 11000 && error.keyPattern) {
      if (error.keyPattern.Username === 1) {
        return res.status(400).json({ error: 'Username already exists' });
      } else if (error.keyPattern.Email === 1) {
        return res.status(400).json({ error: 'Email already exists' });
      }
    }

    res.status(500).json({ error: 'Internal Server Error during signup' });
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (passwordMatch) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error during login' });
  }
});
app.post('/submit-order', async (req, res) => {
  const { itemName, itemPrice, quantity } = req.body;
  console.log('Received order:', itemName, itemPrice, quantity);
  res.status(200).json({ message: 'Order submitted successfully' });

  // Rest of your code...
});
app.use((err, req, res, next) => {
  // Error handling logic
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/





const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', // Adjust the port to match your client app
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/register', {
  useUnifiedTopology: true 
  
});

const userSchema = new mongoose.Schema({
  Username: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
});

const User = mongoose.model('users', userSchema);

// Signup Endpoint
app.post('/register', async (req, res) => {
  const { Username, Email, Password, Confirmpassword } = req.body;

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ Username }, { Email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Check if passwords match
    if (Password !== Confirmpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create a new user
    const newUser = new User({ Username, Password: hashedPassword, Email });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);

    if (error.code === 11000 && error.keyPattern) {
      if (error.keyPattern.Username === 1) {
        return res.status(400).json({ error: 'Username already exists' });
      } else if (error.keyPattern.Email === 1) {
        return res.status(400).json({ error: 'Email already exists' });
      }
    }

    res.status(500).json({ error: 'Internal Server Error during signup' });
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (passwordMatch) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error during login' });
  }
});
app.post('/submit-order', async (req, res) => {
  const { itemName, itemPrice, quantity } = req.body;
  console.log('Received order:', itemName, itemPrice, quantity);
  res.status(200).json({ message: 'Order submitted successfully' });

  // Rest of your code...
});
app.use((err, req, res, next) => {
  // Error handling logic
});




//services

const formDataSchema = new mongoose.Schema({
  policyholderName: String,
  policyholderEmail: String,
  vehicleModel: String,
  vehicleYear: Number,
  policyNumber: String,
  coverageType: String,
});

// Create a mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Route to handle form submission
app.post('/submit', (req, res) => {
  const formData = new FormData(req.body);
  formData.save()
    .then(() => res.send('Form data saved successfully'))
    .catch(err => res.status(400).send(err));
});




// app.get('/formdata', async (req, res) => {
//   try {
//     const formData = await FormData.find();
//     res.json(formData);
//   } catch (err) {
//     console.error('Error retrieving form data:', err);
//     res.status(500).json({ error: 'Error retrieving form data' });
//   }
// });

// // Create new form data
// app.post('/formdata', async (req, res) => {
//   try {
//     const newFormData = new FormData(req.body);
//     await newFormData.save();
//     res.json(newFormData);
//   } catch (err) {
//     console.error('Error creating new form data:', err);
//     res.status(500).json({ error: 'Error creating new form data' });
//   }
// });

// // Update form data by ID
// app.put('/formdata/:id', async (req, res) => {
//   try {
//     const updatedFormData = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedFormData);
//   } catch (err) {
//     console.error('Error updating form data:', err);
//     res.status(500).json({ error: 'Error updating form data' });
//   }
// });

// // Delete form data by ID
// app.delete('/formdata/:id', async (req, res) => {
//   try {
//     await FormData.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Form data deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting form data:', err);
//     res.status(500).json({ error: 'Error deleting form data' });
//   }
// });




//contact
const formDataSchema1 = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});
const FormData1 = mongoose.model('FormData1', formDataSchema1);
app.post('/submitForm', (req, res) => {
  const formData1 = new FormData1(req.body); // Use FormData1 instead of FormData
  formData1.save()
    .then(() => res.send('Form data saved successfully'))
    .catch(err => res.status(400).send(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});










