const express = require('express');
const cors = require('cors');
const testRoutes = require('./routes/testRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', testRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));