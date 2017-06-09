import { Form, FormControl, Button } from 'react-bootstrap';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import store from '../../store';
import '../../style/auth.scss';
import React from 'react';

export default class Auth extends React.Component {

    state = {
        password: '',
        email: ''
    }

    // TODO: replace with "normal" authorization
    performAuth() {
        store.dispatch(login(true));

        this.forceUpdate();
    }

    handleInputPassword(ev) {
        this.setState({ password: ev.target.value });
    }

    handleInputEmail(ev) {
        this.setState({ email: ev.target.value });
    }

    authorizeAction(event) {
        this.performAuth();

        event.preventDefault();
    }

    redirect() {
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
    }

    showForm() {
        return (<div className='jumbotron'>
                <Form onSubmit={this.authorizeAction.bind(this)} ref='form'>
                    <FormControl type='email' onChange={this.handleInputEmail.bind(this)} className='form-control' />
                    <FormControl type='password' onChange={this.handleInputPassword.bind(this)} className='form-control' />
                    <Button type='submit' bsStyle='primary' >Login</Button>
                </Form>
            </div>);
    }

    render() {
        const { authorized } = store.getState();
        const view = authorized ? this.redirect() : this.showForm()

        return (<div className='container authorization'>
            <div className='picture logo'/>

                {view}

        </div>);
    }
}
