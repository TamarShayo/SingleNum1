const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use bodyParser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define your function
function singleNum(data) {
    let single = data[0];
    for (let i = 1; i < data.length; i++) {
        single ^= data[i];
    }
    return `Your single num is: ${single}`;
}

// Define a route to handle incoming GET requests with query parameters
app.get('/', (req, res) => {
    try {
        // Convert the input data to an array of numbers
        const inputData = commandLineArgs.map(Number);

        // Call your function with the input data
        const result = singleNum(inputData);

        // Send the result back as a response
        res.status(200).json({ result });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define a default route to handle other requests
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Extract command line arguments
const commandLineArgs = process.argv.slice(2);

// If command line arguments are provided, use them as input data
if (commandLineArgs.length > 0) {
    const inputData = commandLineArgs.map(Number);
    const result = singleNum(inputData);
    console.log(result);
}
