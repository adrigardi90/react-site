import * as React from 'react';
import { Link } from 'react-router-dom';

import './logoContainer.scss';

interface Props {
    style: string;
}

export const LogoContainer = (props: Props) => {

    const style = `portolio_logo_container ${props.style}`;

    return (
        <div className={style}>
            
            <Link to="/">
                <div className="portfolio_logo"></div>
            </Link>
            
            <div className="portfol¡o_social_container">
                <div className="content-grid mdl-grid">
                    <a>
                        <div id="twitter" className="portfolio_logo_twitter"></div>
                    </a>
                    <a target="_blank" href="https://github.com/adrigardi90">
                        <div id="github" className="portfolio_logo_github"></div>
                    </a>
                    <a href="">
                        <div id="linkedin" className="portfolio_logo_linkedin"></div>
                    </a>
                </div>

            </div>
        </div>
    )
};