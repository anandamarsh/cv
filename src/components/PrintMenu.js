import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    printMenu: {
        marginTop: '2.2em'
    },
    formControl: {
        margin: '1em 1.5em',
    },
    title: {
        margin: '1em 0 0 1.5em'
    },
    button: {
        margin: '1.5em auto 0.65em auto'
    }
});

class PrintMenu extends React.Component {

    state = { printSettings: 'summary', printContacts: true };

    render() {
        const { classes } = this.props;

        return (
            <Popover open={this.props.showPrintMenu} onClose={this.props.onClose} className={classes.printMenu} anchorEl={this.props.anchorEl}
                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'bottom', horizontal: 'right'}} >
                <Typography variant="subheading" className={classes.title} color="secondary">Print Options</Typography>
                <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup name="printSettingss" className={classes.group} value={this.state.printSettings}
                                onChange={event => this.setState(...this.state, { printSettings: event.target.value })}>
                        <FormControlLabel value="summary" control={<Radio />} label="Summary" />
                        <FormControlLabel value="detailed" control={<Radio />} label="Detailed" />
                    </RadioGroup>
                    <FormControlLabel
                        control={ <Checkbox checked={this.state.printContacts} value="checkedA"
                                      onChange={event=>this.setState({...this.state, printContacts: event.target.checked})} /> }
                        label="Print Contacts"
                    />
                    <Button variant="contained" color="secondary" className={classes.button}
                            onClick={()=>window.open(`${window.location}?printSettings=${this.state.printSettings}&printContacts=${this.state.printContacts}`,'_blank')}>
                        Print
                    </Button>
                 </FormControl>
            </Popover>
        );
    }
}

PrintMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrintMenu);
