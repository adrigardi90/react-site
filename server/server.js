const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');
const compression = require('compression');

import { renderToString } from "react-dom/server";
import { Route } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import { RouterComponent } from '../src/router';
import * as Pages from '../src/pages';
import { App } from '../src/app';
import { Html } from '../src/Html';

// ENV
const env = process.env.NODE_ENV || 'dev';

// Ports
const httpPort = 8080;
const httpsPort = 8443;

// Router
const router = require('./api');

// SSL certificate configuration
const options = {
    cert: fs.readFileSync('dist/server/sslcert/fullchain.pem'),
    key: fs.readFileSync('dist/server/sslcert/privkey.pem')
};

// compress all responses
app.use(compression({ level: 9 }));

app.use('/client', express.static('dist/client'));
app.use('/images', express.static('dist/client/images'));
app.use(bodyParser.json());

// Api 
app.use('/api', router);

// Redirect to the SSR
app.get("*", (req, res, next) => {

    const context = {}
    const body = renderToString(
        <StaticRouter
            location={req.url}
            context={context}>
            <App>
                <Route exact path="/" component={Pages.Description}></Route>
                <Route path="/aptitudes" component={Pages.Aptitudes}></Route>
                <Route path="/contact" component={Pages.Contact}></Route>
            </App>
        </StaticRouter>
    );
    const title = 'Agdsite';

    res.send(Html({title, body}));
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


