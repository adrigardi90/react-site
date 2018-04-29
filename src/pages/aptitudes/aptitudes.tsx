import * as React from 'react';

import { AptitudeCard } from './../../components/card/aptitude/aptitude-card';
import { dataAptitudes } from './../../commons/dataAptitudes';

import './aptitudes.scss';

const scrollToSection = () => {
    console.log('aaa')
    var elmnt = document.getElementById("back").offsetTop;
    console.log(elmnt)
    document.getElementById('portfolio-body').scrollTop = elmnt + 125 - 10;
}
export const Aptitudes = () => (
    <section className="mdl-layout__tab-panel is-active aptitudes">

        <div className="aptitudes__summary">
            <div className="mdl-grid aptitudes-section">
                {
                    dataAptitudes.map((apt: any) => (
                        <div className="mdl-cell" id="#/">
                            <AptitudeCard 
                                key={apt.i}
                                title={apt.title}
                                icon={apt.icon}
                                description={apt.description}
                                click={scrollToSection}/>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="aptitudes__front" id="front">
            <div className="aptitudes-section">
                front
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


