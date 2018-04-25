import * as React from 'react';
import { Menu } from './../desktop/menu';
import { Routes } from '../../../commons';
import { LogoContainer } from './../../header/logo/logoContainer';

import './menuMobile.scss';

export const MenuMobile = () => (
    <div 
        id="menuMobile" 
        className="mdl-layout__drawer mdl-layout--small-screen-only menu-mobile">
        
        <LogoContainer style="mdl-layout--small-screen-only" />
        <Menu 
            list={Routes}
            style="mdl-navigation__link" />
    </div>
);