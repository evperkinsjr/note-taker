// Dependencies
const fs = require('fs');
const express = require('express');
const apiRouter = express.Router();
const uuid = require('uuid');

// API Routing

const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

// GET Requests
apiRouter.get('/', (req, res) => {
    return res.json(noteList);
});

// POST Requests
apiRouter.post('/', (req, res) => {
    
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
apiRouter.delete('/:id', (req, res) => {
    
    // find note
    const deleteNote = noteList.find(note => note.id === req.params.id);

    // delete note
    noteList.splice(noteList.indexOf(deleteNote), 1);

    res.end('Note deleted');
});

module.exports = apiRouter;