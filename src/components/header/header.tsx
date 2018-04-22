
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from './../../commons';
import { Menu } from './../menu';
import { LogoContainer } from './logo/logoContainer';

import './header.scss';

export const Header = () => (
    <header className="mdl-layout__header mdl-layout__header--waterfall portfolio_header dl-layout__header--scroll" >

        <div className="portfolio_nav_container mdl-layout--large-screen-only">
            <Menu
                list={Routes}
                style="mdl-layout__tab" />
        </div>
        <LogoContainer
            style="mdl-layout--large-screen-only" />


    </header>
);