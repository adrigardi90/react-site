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
            <div className="portfolio_logo"></div>
            <div className="portfol¡o_social_container">
                <div className="content-grid mdl-grid">
                    <a>
                        <div className="portfolio_logo_twitter"></div>
                    </a>
                    <a target="_blank" href="https://github.com/adrigardi90">
                        <div className="portfolio_logo_github"></div>
                    </a>
                    <a href="">
                        <div className="portfolio_logo_linkedin"></div>
                    </a>
                </div>

            </div>
        </div>
    )
};