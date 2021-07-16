// Dependencies
const express = require('express');

// Express Configuration
const app = express();

// Sets the port for listening
const PORT = process.env.PORT || 3000;

// Sets up the Express App for data parsing
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use('/', require('./routes/htmlRoutes'));
app.use('/api/notes', require('./routes/apiRoutes'));


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });