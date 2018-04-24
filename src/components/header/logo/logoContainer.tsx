import * as React from 'react';
import { Link } from 'react-router-dom';

import './logoContainer.scss';

interface Props {
    style: string;
}

const removeMenuStyle = (event) => {
    console.log("event")
}

export const LogoContainer = (props: Props) => {

    const style = `logo-container ${props.style}`;

    return (
        <div className={style}>
            
            <div className="logo-container__profile">
                <Link to="/">
                    <div 
                        className="portfolio_logo"
                        onClick={removeMenuStyle}></div>
                </Link>
            </div>
            
            
            <div className="portfol¡o_social_container">
                <div className="content-grid mdl-grid">
                    <a target="_blank" href="https://twitter.com/adrigardi90">
                        <div id="twitter" className="portfolio_logo_twitter"></div>
                    </a>
                    <a target="_blank" href="https://github.com/adrigardi90">
                        <div id="github" className="portfolio_logo_github"></div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/adrigardi90/">
                        <div id="linkedin" className="portfolio_logo_linkedin"></div>
                    </a>
                </div>

            </div>
        </div>
    )
};