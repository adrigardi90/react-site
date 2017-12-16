import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import './body.scss';

export const Body: React.StatelessComponent<{}> = (props) => (
    <div className="portfolio_body">
        <div>
            <main className="mdl-layout__content">
                <Switch>
                    {props.children}
                </Switch>
            </main>
        </div>
    </div>
);