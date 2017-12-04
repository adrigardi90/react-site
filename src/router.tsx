import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import * as Pages from './pages';
import { App } from './app';

export const RouterComponent = () => (
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Pages.Description}></Route>
            <Route path="/projects" component={Pages.Projects}></Route>
        </App>
    </BrowserRouter>
);