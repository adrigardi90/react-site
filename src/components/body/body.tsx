import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import './body.scss';

export const Body: React.StatelessComponent<{}> = (props) => (
    <main className="mdl-layout__content portfolio_body">
        <div>
            <main className="mdl-layout__content portfolio_body-container">
                <Switch>
                    {props.children}
                </Switch>
            </main>
        </div>
    </main>
);