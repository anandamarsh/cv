import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import urlParams from '../util';
import SectionDetails from './SectionDetails';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '1000px',
        margin:'3em auto 0 auto',
        position: 'relative'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        marginLeft: '3em'
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
});

class BodyPart extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={`${classes.root} ${this.props.type}`}>
                {this.props.title && <Typography variant="subheading" className={classes.title} color="secondary">{this.props.title}</Typography>}
                {this.props.sections.map((section, index) =>
                    <ExpansionPanel key={index} expanded={urlParams.printSettings?true:null}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            {this.props.title==='About Me' && <Typography className={classes.heading}>{section.title}</Typography>}
                            {(this.props.title==='Employment' || this.props.title==='Education') && <Typography className={classes.heading}>
                                <img className={classes.flag} src={`flags/${section.location}.png`} alt={section.location}/>
                                <span className={classes.period}>{section.period[0]}-{section.period[1]}</span>
                                <a target="_blank" className={`openLink`} href={section.url} onClick={e=>e.stopPropagation()}>{section.organization}</a>
                             </Typography>}
                            {this.props.title==='Visa Status' && <Typography className={classes.heading}>
                                <img className={classes.flag} src={`flags/${section.location}.png`} alt={section.location}/>{section.organization}
                            </Typography>}
                            {(this.props.title==='Employment' || this.props.title==='Education') && <Typography className={classes.secondaryHeading}>{section.role}</Typography>}
                        </ExpansionPanelSummary>
                        {this.props.title!=='Education' && this.props.title!=='Visa Status' &&
                            <SectionDetails title={this.props.title} fullText={section.fullText} summary={section.summary}
                                            video={section.video} techStack={section.techStack?section.techStack:[]}/>}
                    </ExpansionPanel>)}
            </div>
        );
    }
}

BodyPart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyPart);
