import * as React from 'react';

import { AptitudeCard } from './../../components/card/aptitude/aptitude-card';
import { dataAptitudes, frontEnd, backEnd, devops } from './../../commons/dataAptitudes';

import './aptitudes.scss';

const scrollToSection = (tag: string) => () => {
    document.querySelector(`#${tag}`).scrollIntoView({
        behavior: 'smooth'
    });
}

export const Aptitudes = () => (
    <section className="mdl-layout__tab-panel is-active aptitudes">

        <div className="aptitudes__summary">
            <div>
                <h2>Technology stack</h2>
                <p className="aptitudes__subtitle">Getting an overview and knowledge over all the several layers</p>

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

        </div>
        <div className="aptitudes__front" id="front">
            <div className="aptitudes-section">

                <div className="mdl-grid mdl-grid--spacing aptitudes__front__basics">
                    {
                        frontEnd.basic.map((item) => (
                            <div className="mdl-cell mdl-cell--2-col">
                                <div>
                                    <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="aptitudes__front__libraries">

                    <h3 className="aptitudes__title">Libraries - Frameworks</h3>

                    <div className="mdl-grid mdl-grid--spacing">
                        {
                            frontEnd.libraries.map((item) => (
                                <div className="mdl-cell mdl-cell--2-col">
                                    <div>
                                        <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="aptitudes__front__styling">

                    <h3 className="aptitudes__title">Styles - User Interface</h3>
                    <p className="aptitudes__subtitle">Responsive design with mobile first</p>

                    <div className="mdl-grid mdl-grid--spacing">
                        {
                            frontEnd.styles.map((item) => (
                                <div className="mdl-cell mdl-cell--2-col">
                                    <div>
                                        <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="aptitudes__front__bundling">

                    <h3 className="aptitudes__title">Bundling and packaging</h3>
                    <p className="aptitudes__subtitle">Optimize the output for usage in a browser</p>

                    <div className="mdl-grid mdl-grid--spacing">
                        {
                            frontEnd.bundling.map((item) => (
                                <div className="mdl-cell mdl-cell--2-col">
                                    <div>
                                        <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>

        <div className="aptitudes__separator" id="separator">

        </div>

        <div className="aptitudes__back" id="back">
            <div className="aptitudes-section">
                <div className="mdl-grid mdl-grid--spacing aptitudes__back__basics">
                    {
                        backEnd.basic.map((item) => (
                            <div className="mdl-cell mdl-cell--2-col">
                                <div>
                                    <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="aptitudes__back__libraries">

                    <h3 className="aptitudes__title">Libraries </h3>

                    <div className="mdl-grid mdl-grid--spacing">
                        {
                            backEnd.libraries.map((item) => (
                                <div className="mdl-cell mdl-cell--2-col">
                                    <div>
                                        <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="aptitudes__back__databases">

                    <h3 className="aptitudes__title">Databases </h3>
                    <p className="aptitudes__subtitle">NOSQL databases</p>

                    <div className="mdl-grid mdl-grid--spacing">
                        {
                            backEnd.databases.map((item) => (
                                <div className="mdl-cell mdl-cell--2-col">
                                    <div>
                                        <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>

        <div className="aptitudes__separator-two" id="separator">

        </div>

        <div className="aptitudes__devops" id="devops">
            <div className="aptitudes-section">

                <div className="mdl-grid mdl-grid--spacing aptitudes__devops__basics">
                    {
                        devops.basic.map((item) => (
                            <div className="mdl-cell mdl-cell--2-col">
                                <div>
                                    <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="aptitudes__devops__cloud">

                    <h3 className="aptitudes__title">Cloud</h3>
                    <p className="aptitudes__subtitle">Platform and Infraestructure as a Service</p>

                    <div className="mdl-grid mdl-grid--spacing">
                        {
                            devops.cloud.map((item) => (
                                <div className="mdl-cell mdl-cell--3-col">
                                    <div>
                                        <img src={`../../images/` + item.icon} alt="" id={item.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>


    </section>
);


