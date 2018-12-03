import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Print from '@material-ui/icons/Print';

import PrintMenu from './PrintMenu'

import CV from '../cv.json'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    iconRight: {
        right: '-0.5em'
    }
};

class TopNav extends React.Component {

    state = { showPrintMenu: false, anchorEl: null };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {CV.name}
                        </Typography>
                        <IconButton className={classes.iconRight} aria-haspopup="true" color="inherit"
                            onClick={(e) => this.setState(...this.state, { anchorEl: e.currentTarget, showPrintMenu: true })} >
                            <Print />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <PrintMenu showPrintMenu={this.state.showPrintMenu} anchorEl={this.state.anchorEl}
                    onClose={() => this.setState(...this.state, { anchorEl: null, showPrintMenu: false })} />
            </div>
        );
    }
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);
