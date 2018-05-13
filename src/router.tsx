import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as Pages from './pages';
import { App } from './app';

export const RouterComponent = () => (
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Pages.Description}></Route>
            <Route path="/aptitudes" component={Pages.Aptitudes}></Route>
            <Route path="/contact" component={Pages.Contact}></Route>
        </App>
    </BrowserRouter>
);