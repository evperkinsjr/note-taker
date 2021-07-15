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
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });