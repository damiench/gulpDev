import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import store from '../../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authorized } = store.getState();

    const render = (props) =>
        authorized
        ? <Component {...props}/>
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

    return <Route {...rest} render={render} />
};

export default PrivateRoute;
