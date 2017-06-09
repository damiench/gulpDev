import React from 'react';


export default class Header extends React.Component {
    renderHeader() {
        return (<div className='navbar-header' >
                <div className='picture tshirt nav navbar-nav'/>
                <div className='vertical-line nav navbar-nav'/>
                <div className='nav navbar-nav title text'>
                    Goods Ordering
                </div>
            </div>);
    }

    renderBody() {
        return (<div className='navbar'>
            <div className='nav navbar-nav text status'>
                {/* replace with actual checking of user */}
                Currently Online: Crystal
            </div>
        </div>);
    }

    render() {
        const { authorized } = this.props;

        return (
            <nav className='header navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid no-padding'>
                    {this.renderHeader()}
                    {this.renderBody()}
                </div>
            </nav>
        )
    }
}
