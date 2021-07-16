// Dependencies
const fs = require('fs');
const uuid = require('uuid');

// API Routing
module.exports = (app) => {
    const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // GET Requests
    app.get('/api/notes', (req, res) => {
        return res.json(noteList);
    });

    // POST Requests
    app.post('/api/notes', (req, res) => {
        
        // Stores info
        const newNote = req.body;

        // Sets id property
        newNote.id = uuid.v4();

        // Adds note
        noteList.push(newNote);

        // Returns notes
        return res.json(noteList);
    });

    // DELETE Requests
    app.delete('api/notes/:id', (req, res) => {
        
        // find note
        const deleteNote = noteList.find(note => note.id === req.params.id);

        // delete note
        noteList.splice(noteList.indexOf(deleteNote), 1);

        res.end('Note deleted');
    });
}