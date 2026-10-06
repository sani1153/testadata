const dataroutes = require('./src/routes/data-routes');
const db = require('./src/config/db');
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use("/api", dataroutes);

db.authenticate().then(() => {
    console.log('Database connected...');
})
.catch((err) => {
    console.error('Unable to connect to the database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
