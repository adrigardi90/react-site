import * as React from 'react';
import { Link } from 'react-router-dom';
import { filter } from 'lodash';

import { RouteType } from './../../../commons/routes';

interface Props {
    list: Array<RouteType>;
    style: string;
}

const hideMobileMenu = (style: string) => (event) => {

    const el = document.getElementsByClassName(style);
    filter(el, (el) => el.classList.remove('active'));

    event.target.classList.add('active');

    const ele2 = document.getElementById('menuMobile');
    ele2.setAttribute('aria-hidden', 'true')
    ele2.classList.remove('is-visible')

    const ele3 = document.getElementsByClassName('mdl-layout__obfuscator is-visible')
    ele3.length != 0 ? ele3[0].classList.remove('is-visible') : ele3
}

export const Menu = (props: Props) => (
    <nav className="mdl-navigation">
        {
            props.list.map((route, i) => (
                <Link
                    id={i}
                    to={route.path}
                    key={i}
                    className={props.style}
                    onClick={hideMobileMenu(props.style)}>{route.name}</Link>
            ))
        }
    </nav>
);