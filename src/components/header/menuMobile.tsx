import * as React from 'react';
import { Menu } from './menu';
import { Routes } from '../../commons';
import { LogoContainer } from './logoContainer';

export const MenuMobile = () => (
    <div id="menuMobile" className="mdl-layout__drawer mdl-layout--small-screen-only portfolio_header">
        <LogoContainer style="mdl-layout--small-screen-only" />
        <Menu list={Routes}
            style="mdl-navigation__link" />
    </div>
);