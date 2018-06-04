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
    valid: boolean;
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
            submit: false,
            valid: true
        }
    }

    handleChange = (event) => {
        const target: any = event.target;
        this.setState({
            ...this.state,
            [target.name]: target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if ((this.state.name && this.state.email && this.state.message) !== '') {
            this.setState({ loading: !this.state.loading, error: false, submit: false, valid: true })
            email(getData(this.state)).then(this.successSubmit, this.errorSubmit)
        } else {
            this.setState({ valid: false, submit: false, error: false })
        }
    }

    successSubmit = (data: any) => {
        this.setState({ loading: !this.state.loading, submit: true })
        data !== 200 ? this.setState({ error: true }) : null;
    }

    errorSubmit = (error) => {
        this.setState({ loading: !this.state.loading, error: true })
    }

    render() {

        const invalid = (this.state.name === '' || this.state.email === '' || this.state.message === '');

        return (
            <div className="contact">
                {
                    !this.state.error && this.state.submit ? (
                        <div className="contact__submit-success">
                            <img src={'../../images/message.svg'} alt="" />
                            <p > Message sent. Thank you!</p>
                        </div>

                    ) : (
                            <div className="contact-container">
                                <h2>Contact me and send a message</h2>
                                <p>Please, fill out the mandatory fields</p>
                                <form onSubmit={this.handleSubmit}>

                                    <Input
                                        label='Name'
                                        name='name'
                                        placeholder='Enter your name'
                                        type='text'
                                        mandatory
                                        value={this.state.name}
                                        onChange={this.handleChange} />

                                    <br />

                                    <Input
                                        label='Email'
                                        name='email'
                                        placeholder='Enter your email'
                                        type='text'
                                        mandatory
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
                                        mandatory
                                        onChange={this.handleChange} />

                                    <div className="contact__submit">
                                        <button
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                                            type="submit"
                                            value="Submit" >
                                            Submit
                                        </button>

                                        <p className={this.state.loading && !invalid ? 'show' : 'hidden'}>Sending message ...</p>
                                        {
                                            this.state.error && <p className="contact__submit-error">Error sending the message! Try again</p>
                                        }
                                        {
                                            invalid && !this.state.valid &&
                                            <p className="contact__submit-error">Please enter the mandatories fields</p>
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


