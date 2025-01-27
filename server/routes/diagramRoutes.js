const compromise = require('compromise');
const express = require('express');
const Diagram = require('../models/Diagram');
const router = express.Router();

router.post('/generate', async (req, res) => {
    const { text } = req.body;

    try {
        const doc = compromise(text);
        const people = doc.people().out('array'); // Extract people's names
        const places = doc.places().out('array'); // Extract places
        const organizations = doc.organizations().out('array'); // Extract organizations

        // Generate a dynamic diagram based on entities
        let diagramSVG = 'graph TD;';
        people.forEach((person, index) => {
            diagramSVG += ` A${index}[${person}] --> B[${places[0] || 'Location'}];`;
        });
        if (organizations.length > 0) {
            diagramSVG += ` B --> C[${organizations[0]}];`;
        }

        // Save text to the database
        const newDiagram = new Diagram({ text });
        await newDiagram.save();

        res.status(200).json({ success: true, diagram: diagramSVG });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
