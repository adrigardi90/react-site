const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');

// Ports
const httpPort = 8080;
const httpsPort = 8443;

// Router
const router = require('./api');

// SSL certificate configuration
const options = {
    cert: fs.readFileSync(path.join(__dirname, './sslcert/fullchain.pem')),
    key: fs.readFileSync(path.join(__dirname, './sslcert/privkey.pem'))
};

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use('/api', router);

// Redirect to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

//HTTP
http.createServer(app).listen(httpsPort, () => {
    console.log("Listening http..." + httpPort);
});

// HTTPS
https.createServer(options, app).listen(httpsPort, () => {
    console.log("Listening https..." + httpsPort);
});
