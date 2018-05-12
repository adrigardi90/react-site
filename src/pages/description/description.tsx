import * as React from 'react';

import './description.scss';


export const Description = () => (
    <section
        className="mdl-layout__tab-panel is-active description"
        id="#/">
        <div className="description__challenges">
            <div className="description-section">
                <h1>Always looking for new challenges</h1>
                <p>Building new products and systems from scratch with the right solution is something really exciting you cannot stop doing it once you've tried it </p>
            </div>
        </div>

        <div className="description__team">
            <div className="description-section">
                <h3>Working as a team</h3>
                <p> Working in a healthy atmosphere promoting the cooperation</p>
                <div className="mdl-grid mdl-grid--spacing description__team__list">
                    <div className="mdl-cell mdl-cell--4-col">
                        <div>
                            <img src="./../../images/smile.png" alt="" />
                            <p>Friendly</p>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col">
                        <div>
                            <img src="./../../images/thumbs.png" alt="" />
                            <p>Optimistic</p>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col">
                        <div>
                            <img src="./../../images/proactive.png" alt="" />
                            <p>Proactive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="description__studies">
            <div className="description-section">
                <h1>Keep learning</h1>
                <p>Trying to find any opportunity to learn something new and innovative</p>
            </div>
        </div>
    </section>
);