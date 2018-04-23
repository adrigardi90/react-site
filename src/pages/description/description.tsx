import * as React from 'react';

import './description.scss';


export const Description = () => (
    <section
        className="mdl-layout__tab-panel is-active description"
        id="#/">
        <div className="description__challenges">
            <div className="description-section">
                <h1>Always looking for new challenges</h1>
                <p>Building and creating new products from scratch is something really exciting you can not avoid once you've tried it </p>
            </div>
        </div>

        <div className="description__team">
            <div className="description-section">
                <h3>Teamwork as a value</h3>
                <p> Working in a healthy atmosphere promoting the cooperation</p>
                <div className="mdl-grid description__team__list">
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

        <div >
            <div className="description-section">
                <h3>Working as a team is the key to success</h3>
            </div>
        </div>

    </section>
);