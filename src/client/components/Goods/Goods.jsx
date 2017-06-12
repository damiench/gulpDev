import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableColumn
} from 'material-ui';
import { time } from '../../utils/formatters';
import PropTypes from 'prop-types';

// configuration settings for table with all goods
const tableConfig = {
    TABLE: {
        fixedHeader: false,
        selectable: true,
        multiSelectable: true
    },
    THEADER: {
        displaySelectAll: true,
        enableSelectAll: true,
        adjustForCheckbox: true
    },
    TBODY: {
        displayRowCheckbox: true,
        deselectOnClickaway: false,
        stripedRows: true,
        showRowHover: true
    }
}

export default class Goods extends React.Component {
    tableRow(item) {
        const {id, name, quantity, SKU, endpoint, shipDate } = item;
        let formattedTime  = time(shipDate);

        return (<TableRow key={id}>
            <TableRowColumn>{id}</TableRowColumn>
            <TableRowColumn>{name}</TableRowColumn>
            <TableRowColumn>{endpoint}</TableRowColumn>
            <TableRowColumn>{formattedTime}</TableRowColumn>
            <TableRowColumn>{SKU}</TableRowColumn>
            <TableRowColumn>{quantity}</TableRowColumn>
        </TableRow>);
    }

    get tableHeader() {
        const config = tableConfig.THEADER;

        return (<TableHeader
            displaySelectAll={config.displaySelectAll}
            enableSelectAll={config.enableSelectAll}
            adjustForCheckbox={config.adjustForCheckbox}>
                <TableRow>
                    <TableHeaderColumn tooltip='The Order ID'>Order ID</TableHeaderColumn>
                    <TableHeaderColumn tooltip='the item name'>Item</TableHeaderColumn>
                    <TableHeaderColumn tooltip='Endpoint'>EP</TableHeaderColumn>
                    <TableHeaderColumn tooltip='The ship Date'>Ship Date</TableHeaderColumn>
                    <TableHeaderColumn tooltip='SKU'>SKU</TableHeaderColumn>
                    <TableHeaderColumn tooltip='Quantity'>QTY</TableHeaderColumn>
                </TableRow>
            </TableHeader>);
    }

    get tableBody() {
        const config = tableConfig.TBODY;
        const { items } = this.props;

        return (<TableBody
            displayRowCheckbox={config.displayRowCheckbox}
            deselectOnClickaway={config.deselectOnClickaway}
            showRowHover={config.showRowHover}
            stripedRows={config.stripedRows}>
                {_.map(items, (item) => this.tableRow(item))}
            </TableBody>);

    }

    renderTable() {
        const config = tableConfig.TABLE;
        var innerHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (<Table
            style={{maxHeight: innerHeight - 100 }}
            fixedHeader={config.fixedHeader}
            selectable={config.selectable}
            multiSelectable={config.multiSelectable}>
            {this.tableHeader}
            {this.tableBody}
        </Table>);
    }

    render() {
        return (
            <div className='goods-table'>
                {this.renderTable()}
            </div>
        );
    }
}

Goods.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}
