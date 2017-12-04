
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from './../../commons';
import { Menu } from './menu';
import { LogoContainer } from './logoContainer';

export const Header = () => (
    <header className="mdl-layout__header portfolio_header mdl-layout__header--scroll" >

        <LogoContainer style="mdl-layout--large-screen-only" />

        <div className="portfolio_nav_container mdl-layout--large-screen-only">
            <Menu list={Routes}
                style="mdl-layout__tab" />
        </div>
    </header>
);