const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

const corsOptions = {
    origin: 'http://localhost:8081', // Vue.js ilovasining manzili
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.static('path/to/vue-app'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
