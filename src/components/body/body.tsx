import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Body: React.StatelessComponent<{}> = (props) => (
    <div>
        <div className="portfolio_body_container">
            <main className="mdl-layout__content">
                <Switch>
                    {props.children}
                </Switch>
            </main>
        </div>
    </div>
);