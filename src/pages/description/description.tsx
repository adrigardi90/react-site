import * as React from 'react';

import './description.scss';


export const Description = () => (
    <section
        className="mdl-layout__tab-panel is-active description"
        id="#/">
        <div className="description__challenges">
            <div className="description-section">
                <h1>Always looking for new challenges</h1>
                <p>Building new products and systems from scratch with the right solution is something really exciting </p>
            </div>
        </div>

        <div className="description__team">
            <div className="description-section">
                <h3>Working as a team</h3>
                <p> Working in a healthy atmosphere promoting the cooperation</p>
                <div className="mdl-grid mdl-grid--spacing description__team__list">
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--middle">
                        <div className="description__team__list-container">
                            <img src="./../../images/smile.png" alt="" />
                            <p>Friendly</p>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--middle">
                        <div className="description__team__list-container">
                            <img src="./../../images/thumbs.png" alt="" />
                            <p>Optimistic</p>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--middle">
                        <div className="description__team__list-container">
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
                <p>Trying to find any opportunity to learn something new</p>
            </div>
        </div>

        <div className="description__innovation">
            <div className="description-section">
                <h3>Innovation</h3>
                <p>Interested in the new fields that come up with the innovation</p>
                <div className="mdl-grid mdl-grid--spacing description__team__list">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--middle">
                        <div className="description__innovation__image">
                            <img src="./../../images/brain.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);