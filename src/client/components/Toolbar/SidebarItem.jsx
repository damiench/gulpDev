import { dollar, time } from '../../utils/formatters';
import React from 'react';
import PropTypes from 'prop-types';

import '../../style/order.scss';

export default class SidebarItems extends React.Component {
    renderItem(item) {
        return <Order order={item} key={item.id}/>
    }

    render() {
        const { orders } = this.props;

        return (<div className='sidebar-items'>
            {_.map(orders, (order) => this.renderItem(order))}
        </div>)
    }
}

class Order extends React.Component {
    render() {
        const { name, date, price, vendor } = this.props.order;

        return (<div className='order'>
            <div className='content'>
                <div className='name'>
                    {name}
                </div>
                <div className='info'>
                    {vendor} | {dollar(price)} | {time(date)}
                </div>
            </div>
        </div>);
    }
}

Order.propTypes = {
    order: PropTypes.object.isRequired
};

SidebarItems.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.object)
};
