import React from 'react';


export default class Header extends React.Component {
    get title() {
        return (<div className='col-md-3 row' >
                <div className='picture tshirt pull-left'/>
                <div className='vertical-line pull-left'/>
                <div className='title text pull-left'>
                    Goods Ordering
                </div>
            </div>);
    }

    get body() {
        return (<div className='col-md-5'>
            <div className='text pull-left status'>
                {/* replace with actual checking of user */}
                Currently Online: Crystal
            </div>
        </div>);
    }

    render() {
        const { authorized } = this.props;

        return (
            <nav className='header navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid no-padding no-margin row'>
                    {this.title}
                    {this.body}
                </div>
            </nav>
        )
    }
}
