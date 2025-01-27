const mongoose = require('mongoose');

const DiagramSchema = new mongoose.Schema({
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Diagram', DiagramSchema);
