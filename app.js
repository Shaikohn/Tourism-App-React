const express = require('express');
const path = require('path');

const app = express();
app.listen(3000, () => {
    console.log('app running in port 3000');
});

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./home', 'home.html'));
});

app.get('/info', (req, res) => {
    res.sendFile(path.resolve('./info', 'info.html'));
});