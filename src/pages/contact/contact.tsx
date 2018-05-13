import * as React from 'react';
import { Input, Textarea } from './../../components';
import './contact.scss';


interface State {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export class Contact extends React.Component<{}, State>{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact">

                <h2>Contact me and send a message</h2>
                <p>Contact me and send a message</p>
                <form onSubmit={this.handleSubmit}>

                    <Input
                        label='Name'
                        name='name'
                        placeholder='Enter your name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange} />

                    <br />

                    <Input
                        label='Email'
                        name='email'
                        placeholder='Enter your email'
                        type='text'
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <br />

                    <Input
                        label='Subject'
                        name='subject'
                        placeholder='Enter the subject'
                        type='text'
                        value={this.state.subject}
                        onChange={this.handleChange} />

                    <br />

                    <Textarea
                        label='Message'
                        name='message'
                        placeholder='Enter your message'
                        value={this.state.message}
                        onChange={this.handleChange} />

                    <div className="contact__submit">
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                            type="submit"
                            value="Submit" >
                            Submit
                        </button>
                    </div>

                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>

        )
    }
}


