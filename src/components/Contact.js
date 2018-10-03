import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Popover from '@material-ui/core/Popover';

import CV from '../cv.json'
import urlParams from "../util";

const styles = theme => ({
    contactButton: {
        position: 'fixed',
        right: '1em',
        bottom: '1em'
    },
    contacts: {
        margin: theme.spacing.unit,
    },
    chip: {
        margin: theme.spacing.unit,
    }
});

class Contact extends React.Component {

    state = {showContact:false, anchorEl: null};

    handleClick = event => {
        this.setState(...this.state, {
            anchorEl: event.currentTarget,
            showContact: true
        });
    };

    handleClose = event => {
        this.setState(...this.state, {
            anchorEl: null,
            showContact: false
        });
    };

    sendMail = () => {
        window.location.href = "mailto:"+CV.contact.email+"&subject=Interested in your CV";
        this.setState(...this.state, {
            showContact: false
        });
    };

    phoneCall = () => {
        window.location.href = "tel:"+CV.contact.mobile;
        this.setState(...this.state, {
            showContact: false
        });
    };

    skypeCall = () => {
        window.location.href = "skype:"+CV.contact.skype;
        this.setState(...this.state, {
            showContact: false
        });
    };

    linkedIn = () => {
        window.open('https://www.linkedin.com/in/amarshanand/', '_blank');
        this.setState(...this.state, {
            showContact: false
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="fab" color="secondary" aria-label="Add" className={classes.contactButton}>
                    <Phone onClick={this.handleClick}/>
                </Button>
                <Popover open={this.state.showContact} onClose={this.handleClose} className={classes.contact}
                    anchorEl={this.state.anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'bottom', horizontal: 'center'}}
                >
                    <div className={classes.contacts}>
                        <Chip variant="outlined" color="primary" avatar={<Avatar><Email/></Avatar>}
                              label={CV.contact.email} className={classes.chip} onClick={this.sendMail}/><br/>
                        <Chip variant="outlined" color="primary" avatar={<Avatar><Phone/></Avatar>}
                              label={CV.contact.mobile} className={classes.chip} onClick={this.phoneCall}/><br/>
                        <Chip variant="outlined" color="primary" avatar={<Avatar src="skype.png"></Avatar>}
                              label={CV.contact.skype} className={classes.chip} onClick={this.skypeCall}/><br/>
                        <Chip variant="outlined" color="primary" avatar={<Avatar src="linkedin.png"></Avatar>}
                              label="LinkedIn" className={classes.chip} onClick={this.linkedIn}/>
                    </div>
                </Popover>
                {!!urlParams.printSettings && urlParams.printContacts==='true' && <div className={'contact'}>
                    <div>{CV.contact.email}</div>
                    <div>{CV.contact.mobile}</div>
                </div>}
            </div>
        );
    }

}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);