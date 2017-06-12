import React from 'react';
import Paper from 'material-ui/Paper';
import '../../style/toolbar.scss';
import SidebarContent from './SidebarItem';

export default class Toolbar extends React.Component {

    render() {
        return (
            <Paper className='toolbar-left pull-left' zDepth={0}>
                <SidebarContent orders={testData}/>
            </Paper>
        );
    }
}
/*
* this is only for testing ui, next set data to db!!!
*/


const testData = [
{
    id: 620448,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 6204423,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 620428,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 620348,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 620478,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 620449,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 620450,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 610448,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
{
    id: 629448,
    name:' Alpha #86617984-0',
    vendor: 'AlphaBroder',
    date: '2013-08-15T18:57:08.740Z',
    price: 100
},
]
