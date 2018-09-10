import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

import './AppPrintable.css';
import theme from './theme';
import CV from './cv.json';

import urlParams from './util'

const styles = {
    main_title: {
        textAlign: 'center',
        margin: '1em'
    },
    contact: {
        position: 'absolute',
        top: '1em',
        right: '2em',
        lineHeight: '2em'
    },
    contact_icon: {
        verticalAlign: 'middle',
        fontSize: '1.3em',
        marginRight: '0.5em'
    },
    header: {
        background: 'lightyellow',
        padding: '0.5em',
        borderBottom: '1px solid grey'
    },
    body_root: {
        marginBottom: '3em'
    },
    section: {
        background: 'lightgrey',
        border: '1px solid grey',
        marginBottom: '1em'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        display: 'inline-block',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        marginLeft: '3em',
        display: 'inline-block'
    },
    title: {
        marginBottom: theme.typography.pxToRem(18),
        marginLeft: theme.typography.pxToRem(20)
    },
    period: {
        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.secondary.main,
        marginRight: theme.typography.pxToRem(28)
    },
    flag: {
        height: '1.8em',
        width: 'auto',
        marginRight: '1em',
        float: 'left',
        marginTop: '-0.2em'
    }

};

class App extends Component {

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <TopNav classes={classes}/>
                {urlParams.printContacts && <Contact classes={classes}/>}
                {CV.body.map((bodyPart, index) =>
                    <BodyPart key={index} classes={classes} title={bodyPart.title} sections={bodyPart.sections} type={bodyPart.type}/>)}
            </MuiThemeProvider>
        );
    }

}

const TopNav = ({classes}) =>
    <Typography variant="headline" className={classes.main_title}>
        {CV.name}
    </Typography>

const Contact = ({classes}) => {
    return <Typography variant="body1" className={classes.contact} color={"primary"}>
        <Phone className={classes.contact_icon} color={"primary"}/>{CV.contact.mobile}<br/>
        <Email className={classes.contact_icon} color={"primary"}/>{CV.contact.email}<br/>
        <img style={{width:'1.7em', verticalAlign:'middle', marginRight:'0.17em'}} src="skype.png"/>{CV.contact.skype}
    </Typography>
}

const BodyPart = ({classes, title, sections, type}) => {
    return <div className={`${classes.body_root} ${type}`}>
        {title && <Typography variant="subheading" className={classes.title} color="secondary">{title}</Typography>}
        {sections.map((section, index) =>
            <div className={classes.section} key={index}>
                <div className={classes.header}>
                    {title==='About Me' && <Typography className={classes.heading}>{section.title}</Typography>}
                    {(title==='Employment' || title==='Education') && <Typography className={classes.heading}>
                        <img className={classes.flag} src={`flags/${section.location}.png`} alt={section.location}/>
                        <span className={classes.period}>{section.period[0]}-{section.period[1]}</span>
                        {section.organization}
                    </Typography>}
                    {title==='Visa Status' && <Typography className={classes.heading}>
                        <img className={classes.flag} src={`flags/${section.location}.png`} alt={section.location}/>{section.organization}
                    </Typography>}
                    {(title==='Employment' || title==='Education') && <Typography className={classes.secondaryHeading}>{section.role}</Typography>}
                </div>
                {/*title!=='Education' && title!=='Visa Status' &&
                <SectionDetails title={title} fullText={section.fullText} summary={section.summary}
                                video={section.video} techStack={section.techStack?section.techStack:[]}/>*/}
            </div>)}
    </div>;
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
