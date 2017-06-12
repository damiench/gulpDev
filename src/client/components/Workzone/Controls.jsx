import React from 'react';
import { FlatButton } from 'material-ui';


const labelStyle = {
    textTransform: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
};

const vendors = [{name: 'San Mar'}, {name: 'Alpha'}, {name: 'Vendor1'}];

export default class Controls extends React.Component {

    render() {
        return (
            <div className='controls'>
                <FlatButton
                    label='Create Purchase Order'
                    className='absolute-button'
                    rippleColor={'red'}
                    labelStyle={labelStyle}/>
                <SelectVendor
                    vendors={vendors}/>
            </div>
        );
    }
}

class SelectVendor extends React.Component {
    renderVendors(vendor, i) {
        return (<option key={i}>
            {vendor.name}
        </option>);
    }

    render() {
        const { vendors } = this.props;

        return (<div className='select-vendor'>
            <div className='form-group'>
                <span className='text'>
                    Send checked goods to:
                </span>
                <select className='form-control vendors'>
                    {_.map(vendors, (vendor, i) => this.renderVendors(vendor, i))}
                </select>
            </div>
        </div>);
    }
}
