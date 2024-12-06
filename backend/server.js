const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const policeRoutes = require('./routes/policeRoutes');
const courtRoutes = require('./routes/courtRoutes');
const prisonRoutes = require('./routes/prisonRoutes');

const app = express();
require('dotenv').config();

connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/police', policeRoutes);
app.use('/api/court', courtRoutes);
app.use('/api/prison', prisonRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }) // Set to true to drop tables on every restart
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to sync database:', err);
    });

