const express = require('express');
const app = express();
const port = 3000;


const fundraiserRoutes = require('./routes/fundraisers');


app.use(express.json());


app.use('/api/fundraisers', fundraiserRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});