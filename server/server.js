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
            <title>SSR with RR</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <link href="/client/app.css?5a24b5a76daed83b71aa" rel="stylesheet">
            <link href="/client/server.css" rel="stylesheet">
            <link href="/client/appStyles.css" rel="stylesheet">
            <script defer="defer" src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <script src="/client/vendor.js" defer></script>
            <script src="/client/app.js" defer></script>
            <script defer="defer" src="/client/appStyles.js"></script>
            <script src="/client/babel.js" defer></script>
          </head>
    
          <body>
            <div id="app">${markup}</div>
          </body>

          
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


