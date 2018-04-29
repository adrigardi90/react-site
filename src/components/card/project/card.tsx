import * as React from 'react';
import './card.scss';

interface Props {
    project: string;
    description: string;
    img: string;
    tags: string[];
}

export const Card = (props: Props) => (
    <div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
        <div className="mdl-cell--12-col-tablet mdl-cell--12-col-phone img-container center-align">
            <img
                className="article-image"
                src={require(`./../../../images/${props.img}`)} />
        </div>
        <div className="mdl-cell mdl-cell--8-col">

            <div className="mdl-card__supporting-text no-left-padding">

                <h2 className="mdl-card__title-text">{props.project}</h2>
                <p>{props.description}</p>
                {
                    props.tags.map((tag, i) => (
                        <span
                            className="mdl-chip"
                            key={i}>
                            <span className="mdl-chip__text">{tag}</span>
                        </span>
                    ))
                }
            </div>
        </div>
    </div>
);
