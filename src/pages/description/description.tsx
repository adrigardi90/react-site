import * as React from 'react';

import './description.scss';


export const Description = () => (
    <section
        className="mdl-layout__tab-panel is-active description"
        id="#/">
        <div>
            <div className="description-section">
                <h1>Always looking for new challenges</h1>
                <p> Building and creating new products from scratch is something really exciting you can not avoid once you've tried it </p>
            </div>
        </div>

        <div >
            <div className="description-section">
                <h3>Working as a team is the key to success</h3>
            </div>
        </div>

        <div className="learning">
            <div className="description-section">
                <h1>Keep learning</h1>
                <p> Building and creating new products from scratch is something really exciting you can not avoid once you've tried it </p>
            </div>
        </div>

        <div >
            <div className="description-section">
                <h3>Working as a team is the key to success</h3>
            </div>
        </div>
        
    </section>
);