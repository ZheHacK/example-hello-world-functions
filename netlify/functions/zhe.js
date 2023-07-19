const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Set up CORS middleware
app.use(cors());

// Route to proxy requests
app.get('/proxy', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is missing.' });
  }

  try {
    // Perform the request to the provided URL
    const response = await fetch(url);
    const data = await response.json();

    // Respond with the data from the requested URL
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while proxying the request.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`CORS proxy server is running on port ${port}`);
});
