import React from 'react';
import Paper from 'material-ui/Paper';
import '../../style/toolbar.scss';

export default class Toolbar extends React.Component {

    render() {
        return (
            <Paper className='toolbar-left pull-left' zDepth={2}>
                <div className='affix-top display-4 text-center'>
                    All orders:
                </div>
                
            </Paper>
        );
    }
}
