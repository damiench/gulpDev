import React from 'react';
import PropTypes from 'prop-types';

import '../../style/status.scss';

export default class Status extends React.Component {

    render() {
        return (<div className='status-workzone'>
            <Circle ready={true} text='Work Order'/>
            <Arrow ready={true}/>
            <Circle ready={true} text='Conf #' />
            <Arrow ready={true} />
            <Circle text='Shipped' />
            <Arrow />
            <Circle text='Invoice' />
        </div>)
    }
}

class Arrow extends React.Component {
    render() {
        const { ready } = this.props;

        return (<div className={['arrow', ready ? 'ready' : ''].join(' ')}>
            <div className='line'/>
            <div className='head'/>
        </div>);
    }
}

class Circle extends React.Component {
    render() {
        const { text, ready } = this.props;

        return (<div className={['circle', ready ? 'ready' : ''].join(' ')}>
                {text}
            </div>);
    }
}

Circle.propTypes = {
    text: PropTypes.string.isRequired,
    ready: PropTypes.bool
};

Arrow.propTypes = {
    ready: PropTypes.bool
}
