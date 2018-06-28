const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');
const compression = require('compression');
import { renderToString } from "react-dom/server";
import { BrowserRouter, Route } from 'react-router-dom';

import { RouterComponent } from '../src/router';
import { StaticRouter } from 'react-router';
import * as Pages from '../src/pages';
import { App } from '../src/app';

// ENV
const env = process.env.NODE_ENV || 'dev';

// Ports
const httpPort = 8080;
const httpsPort = 8443;

// Router
const router = require('./api');

// SSL certificate configuration
// const options = {
//     cert: fs.readFileSync(path.join(__dirname, 'sslcert/fullchain.pem')),
//     key: fs.readFileSync(path.join(__dirname, 'sslcert/privkey.pem'))
// };

// compress all responses
app.use(compression({ level: 9 }));

app.use('/client', express.static('dist/client'));
app.use('/images', express.static('dist/client/images'));
app.use(bodyParser.json());

// Api 
app.use('/api', router);

// Redirect to index.html
app.get("*", (req, res, next) => {

    const context = {}
    //res.sendFile(path.join(__dirname, '../dist/index.html'));
    const markup = renderToString(
        <StaticRouter
            location={req.url}
            context={context}>

            <App>
                <Route exact path="/" component={Pages.Description}></Route>
                <Route path="/aptitudes" component={Pages.Aptitudes}></Route>
                <Route path="/contact" component={Pages.Contact}></Route>
            </App>
        </StaticRouter>
    )

    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="initial-scale=1, maximum-scale=1">
                <title>SSR with RR</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
                <link href="/client/app.css" rel="stylesheet">
                <link href="/client/appStyles.css" rel="stylesheet">
            </head>
        
            <body>
                <div id="root">${markup}</div>
            </body>

            <script defer="defer" src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <script type="text/javascript" src="/client/manifest.js"></script>
            <script type="text/javascript" src="/client/vendor.js"></script>
            <script type="text/javascript" src="/client/babel.js"></script>
            <script type="text/javascript" src="/client/app.js"></script>
            <script type="text/javascript" src="/client/appStyles.js"></script>          
        </html>
      `);
})

if (env === 'dev') {
    //HTTP
    http.createServer(app).listen(httpPort, () => {
        console.log("Listening http... " + httpPort);
    });
}

if (env === 'prod') {
    // HTTPS
    https.createServer(options, app).listen(httpsPort, () => {
        console.log("Listening https... " + httpsPort);
    });
}


