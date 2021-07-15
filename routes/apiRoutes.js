// Dependencies
const fs = require('fs');
const uuid = require('uuid');

// API Routing
module.exports = (app) => {
    const notesList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // GET Requests
    app.get('/api/notes', (req, res) => {
        return res.json(notesList);
    });

    // POST Requests
    app.post('/api/notes', (req, res) => {
        
        // Stores info
        const newNote = req.body;

        // Sets id property
        newNote.id = uuid.v4();

        // Adds note
        notesList.push(newNote);

        // Returns notes
        return res.json(notesList);
    });

    // DELETE Requests
    app.delete('api/notes/:id', (req, res) => {
        
        // find note
        const deleteNote = notesList.find(note => note.id === req.params.id);

        // delete note
        notesList.splice(notesList.indexOf(deleteNote), 1);

        res.end('Note deleted');
    });
}