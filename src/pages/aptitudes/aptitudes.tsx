import * as React from 'react';

import { AptitudeCard } from './../../components/card/aptitude/aptitude-card';
import { dataAptitudes } from './../../commons/dataAptitudes';

import './aptitudes.scss';

const scrollToSection = (tag: string) => () => {
    var elmnt = document.getElementById("back").offsetTop;
    document.querySelector(`#${tag}`).scrollIntoView({
        behavior: 'smooth'
    });
}

export const Aptitudes = () => (
    <section className="mdl-layout__tab-panel is-active aptitudes">

        <div className="aptitudes__summary">
            <h2>Technology stack</h2>
            <p>Having an overview over all the layer that data go through</p>

            <div className="mdl-grid aptitudes-section">
                {
                    dataAptitudes.map((apt: any) => (
                        <div className="mdl-cell aptitudes-section__card" id="#/">
                            <AptitudeCard
                                key={apt.i}
                                title={apt.title}
                                icon={apt.icon}
                                description={apt.description}
                                click={scrollToSection(apt.tag)} />
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="aptitudes__front" id="front">
            <div className="aptitudes-section">

                JS, TS, HTML 5
                <h3>Libraries - Frameworks</h3>
                <p>Angular, React, Redux</p>

                <h3>Styling</h3>

                Responsive design image
                <p>css, sass, Bootstrap, Material, Foundation</p>

                <h3>BUndleing</h3>
                <p>Webpack, grunt</p>
            </div>
        </div>

        <div className="aptitudes__back" id="back">
            <div className="aptitudes-section">
                back
            </div>
        </div>

        <div className="aptitudes__devops" id="devops">
            <div className="aptitudes-section">
                devops
            </div>
        </div>

    </section>
);


