import React from 'react';
import { SelectField } from 'material-ui';

const endpoints = [{name: 'ep1'}, {name: 'ep2'}, {name: 'ep3'}, {name: 'ep4'}];

export default class Header extends React.Component {

    renderEndpoints(EP) {
        return (<option key={EP.name} className='endpoint'>
            {EP.name}
        </option>);
    }

    render() {
        const { authorized } = this.props;

        return (
            <nav className='top-bar navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid no-padding no-margin row'>
                    <div className='col-md-3 row'>
                        <div className='text pull-left'>
                            Purchase Orders
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className=' text orders pull-left'>
                            Work Orders
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='form-group'>
                            <label className='text pull-left'>
                                Select EP:
                            </label>
                            <select className='form-control'>
                                {_.map(endpoints, (EP) => this.renderEndpoints(EP))}
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
