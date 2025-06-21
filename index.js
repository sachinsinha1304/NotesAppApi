const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const notesRoutes = require('./routes/noteRoute');

app.use(express.json());
app.use(cors());
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
