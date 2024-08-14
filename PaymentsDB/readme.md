# PaymentsDB

## Description

PaymentsDB is a simple web application that allows users to submit payment information via a form and stores this data in a MongoDB database. The application uses Express.js for the backend server, Mongoose for MongoDB interactions, and serves a static HTML form for payment submissions.

## Features

- Submit payment information (name, email, and amount) through a web form.
- Store payment information in MongoDB.
- View all recorded payments through an API endpoint.

## Installation

### Clone the Repository

git clone https://github.com/deva-04/DevCatalyst.git 

cd DevCatalyst/PaymentsDB

### Install Dependencies

Make sure you have Node.js and npm installed. Then run:
- npm install 

### Set Up Environment Variables

- MONGODB_URI=your_mongodb_connection_uri

## Run the Application

- node server.js

## Usage

### Form Submission

- Navigate to http://localhost:3000 to access the payment submission form. Fill out the form with the payment details and submit.

### View Payments

- To view all recorded payments, navigate to http://localhost:3000/payments. This will display a JSON list of all payments stored in the MongoDB database.
