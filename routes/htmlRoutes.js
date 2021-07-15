// Dependencies
const path = require('path');

// HTML Routing
module.exports = (app) => {
    
    // Home page route
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

    // Notes page route
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
    
}