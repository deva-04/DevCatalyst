const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoURI = 'mongodb+srv://deva:deva2003@cluster0.35bmcvu.mongodb.net/PaymentsDB?retryWrites=true&w=majority&appName=Cluster0';

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Schema and Model
const feeSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  paymentDate: { type: Date, default: Date.now }
});

// Use 'Payments' collection
const Fee = mongoose.model('Fee', feeSchema, 'Payments');

// Serve the form HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/pay', (req, res) => {
  const { name, email, amount } = req.body;
  
  const newPayment = new Fee({ name, email, amount });
  
  newPayment.save()
    .then(() => res.send('Payment recorded successfully!'))
    .catch(err => res.status(500).send('Error recording payment.'));
});

// Add this route to fetch and display all payments
app.get('/payments', (req, res) => {
  Fee.find()
    .then(payments => res.json(payments))
    .catch(err => res.status(500).send('Error fetching payments.'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));