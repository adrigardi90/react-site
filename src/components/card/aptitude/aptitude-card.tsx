
import * as React from 'react';
import './aptitude-card.scss';

interface Props {
    title: string;
    icon: string;
    description: string;
    tag?: string;
    click: () => void;
}

const click = (props: Props) => (event)=> {
    props.click();
}

export const AptitudeCard = (props: Props) => (
    <div 
        className="aptitude-card"
        onClick={click(props)}>
       <div className="aptitude-card__title">
           <h3>{props.title}</h3>
       </div>

       <div className="aptitude-card__icon">
           <img src={require(`./../../../images/${props.icon}`)} />
       </div>

       <div className="aptitude-card__description">
           <p>{props.description}</p>
       </div>
    </div>
);