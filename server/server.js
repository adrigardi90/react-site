const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');

const port = 3000;

const router = require('./api');

const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use('/api', router);
app.set('port', port);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(8080);
//https.createServer(options, app).listen(8443);
