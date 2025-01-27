const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const diagramRoutes = require('./routes/diagramRoutes');

const app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect('mongodb://localhost:27017/TextToDiagram', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err));

app.use('/api/diagrams', diagramRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
