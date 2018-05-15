const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

const router = require('./api')


app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use('/api', router);
app.set('port', port);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})


server.listen(port, () =>
    console.log(`connected to localhost:${port}`)
);
