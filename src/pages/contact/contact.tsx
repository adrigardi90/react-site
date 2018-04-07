import * as React from 'react';
//var componentHandler = require('exports?componentHandler!material-design-lite/material')

export class Contact extends React.Component {

    componentDidMount(){
        //componentHandler.downgradeElements();
    }
    render(){
        return(
            <div className="mdl-grid portfolio-max-width portfolio-contact">
            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Contact</h2>
                </div>
                <div className="mdl-card__media">
                    <img className="article-image" src=" ../../images/contact-image.jpg" alt="" />
                </div>
                <div className="mdl-card__supporting-text">
                    <p>
                        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
                            </p>
                    <p>
                        Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet.
                            </p>
                    <form action="#" className="">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" pattern="[A-Z,a-z, ]*" type="text" id="Name" />
                            <label className="mdl-textfield__label" >Name...</label>
                            <span className="mdl-textfield__error">Letters and spaces only</span>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="Email" />
                            <label className="mdl-textfield__label" >Email...</label>
                        </div>
    
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="sample1" />
                            <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <textarea className="mdl-textfield__input" ></textarea>
                            <label className="mdl-textfield__label" >Enter note</label>
                        </div>
                        <p>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                Submit
                                    </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
   

