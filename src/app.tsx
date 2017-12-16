import * as React from 'react';

import { Header, Body, Menu, MenuMobile } from './components';
import { Routes } from './commons/routes';

export class App extends React.Component<{}, {}> {

    componentDidMount() {
        const ele = document.getElementById('logo_container');
        ele ? ele.remove() : ele;
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
                <Header />
                <MenuMobile />
                <Body>
                    {this.props.children}
                </Body>
            </div>
        )
    }
}
