const express = require('express');
const app = express();
const http = require('http').createServer(app);

// config
const config = {
    port: 80
};

// start express server on port
http.listen(config.port, () => {
    console.log(`http://localhost:${config.port}/`);
});

app.get('/dorfi', (req, res) => {
    res.contentType('image/jpg');
    res.sendFile(`${__dirname}/assets/images/portrait.jpg`);
});

app.get('/me', (req, res) => {
    res.contentType('image/jpg');
    res.sendFile(`${__dirname}/assets/images/portrait-2.jpg`);
});

app.get('/geotiff', (req, res) => {
    res.contentType('image/tiff');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(`${__dirname}/assets/images/geotiff.tif`);
});

app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send('API Server is running');
});