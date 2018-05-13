import * as React from 'react';
import { Input, Textarea } from './../../components';
import './contact.scss';
import { email } from './../../api/mail';

interface State {
    name: string;
    email: string;
    subject: string;
    message: string;
    loading: boolean;
    error: boolean;
    submit: boolean;
}

const getData = (obj: any) => ({
    name: obj['name'],
    email: obj['email'],
    subject: obj['subject'],
    message: obj['message']
})

export class Contact extends React.Component<{}, State>{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            loading: false,
            error: false,
            submit: false
        }
    }

    handleChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({ loading: !this.state.loading, error: false, submit: false })
        event.preventDefault();
        email(getData(this.state)).then((data: any) => {
            this.setState({ loading: !this.state.loading, submit: true })
            data !== 200 ? this.setState({ error: true }) : null;
        }, (error) => {
            this.setState({ loading: !this.state.loading, error: true })
        })
    }

    render() {
        return (
            <div className="contact">
                {
                    !this.state.error && this.state.submit ? (
                        <div className="contact__submit-success">
                            <img src={'../../images/message.svg'} alt=""/>
                            <p > Message sent. Thank you!</p>
                        </div>
                        
                    ) : (
                        <div>
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

                                    <p className={this.state.loading ? 'show' : 'hidden'}>Sending message ...</p>
                                    {
                                        this.state.error && <p className="contact__submit-error">Error sending the message! Try again</p>
                                    }
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        )
    }
}


