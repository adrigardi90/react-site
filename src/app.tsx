import * as React from 'react';

import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Menu } from './components/header/menu';
import { Routes } from './commons/routes';
import { MenuMobile } from './components/header/menuMobile';

export class App extends React.Component<{},{}> {

    componentDidMount() {
        const ele = document.getElementById('logo_container');
        ele ? ele.remove() : ele;
    }

    render(){
        return(
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
