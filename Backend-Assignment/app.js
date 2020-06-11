const express = require('express');
const app = express();

// requesting mongodb connection
require('./utils/mongoose');

const userRoute = require('./routes/router');

// using json parser
app.use(express.json());
app.use(userRoute);

const port = process.env.http_port || 3000;

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})

