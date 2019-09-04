import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

import urlParams from '../util';
import SectionDetails from './SectionDetails';

const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: '1000px',
        margin: '3em auto 0 auto',
        position: 'relative'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0
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
        fontSize: '0.8rem',
        color: theme.palette.secondary.main,
        margin: '0 1rem'
    },
    flag: {
        height: '1.8em',
        width: 'auto',
        marginRight: '1em',
        float: 'left',
        marginTop: '-0.2em'
    },
    tech_title: {
        display: 'inline-block',
        color: theme.palette.text.primary
    },
    tech_description: {
        display: 'inline-block',
        marginLeft: '1em',
        color: theme.palette.text.secondary
    }
});

class BodyPart extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={`${classes.root} ${this.props.type} ${this.props.title}`}>
                {this.props.title && (
                    <Typography variant="subheading" className={classes.title} color="secondary">
                        {this.props.title}
                    </Typography>
                )}
                {this.props.type === 'expandable' &&
                    this.props.sections.map((section, index) => (
                        <ExpansionPanel
                            key={index}
                            elevation={urlParams.printSettings ? 0 : 1}
                            expanded={urlParams.printSettings ? true : null}
                        >
                            <ExpansionPanelSummary
                                className="expansionPanelSummary"
                                expandIcon={<ExpandMoreIcon className="expandIcon" />}
                            >
                                {this.props.title === 'About Me' && (
                                    <Typography className={classes.heading + ' heading'}>{section.title}</Typography>
                                )}
                                {this.props.title === 'Employment' && (
                                    <Typography className={classes.heading + ' heading'}>
                                        <img
                                            className={classes.flag + ' flag'}
                                            src={`flags/${section.location}.png`}
                                            alt={section.location}
                                        />
                                        <span className={classes.period}>
                                            {section.period[0]} - {section.period[1]}
                                        </span>
                                        <a
                                            target="_blank"
                                            className={`openLink`}
                                            href={section.url}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {section.organization}
                                        </a>
                                    </Typography>
                                )}
                                {this.props.title === 'Employment' && (
                                    <Typography className={classes.secondaryHeading}>{section.role}</Typography>
                                )}
                            </ExpansionPanelSummary>
                            <SectionDetails
                                title={this.props.title}
                                fullText={section.fullText}
                                summary={section.summary}
                                video={section.video}
                                techStack={section.techStack ? section.techStack : []}
                            />
                        </ExpansionPanel>
                    ))}
                {this.props.type !== 'expandable' && <Table title={this.props.title} rows={this.props.sections} />}
            </div>
        );
    }
}

class Table extends React.Component {
    render() {
        return (
            <Paper className={'tabular'} elevation={urlParams.printSettings ? 0 : 1}>
                {this.props.rows.map((row, i) => (
                    <div
                        key={i}
                        className={'tabularRow' + (this.props.title === 'Visa Status' ? ' tabularRowInlineBlock' : '')}
                    >
                        <Typography variant="subheading" className="tabularRowSubheading">
                            {this.props.title === 'Technologies' && (
                                <div>
                                    <div className="tabularRowTitle">{row.title}</div>
                                    <div className="tabularRowDescription">{row.description}</div>
                                </div>
                            )}
                            {this.props.title === 'Education' && (
                                <div>
                                    <img
                                        className="tabularRowFlag"
                                        src={`flags/${row.location}.png`}
                                        alt={row.location}
                                    />
                                    <span className="tabularRowPeriod">
                                        {row.period[0]} - {row.period[1]}
                                    </span>
                                    <span className="tabularRowRole">{row.role}</span>
                                    <a
                                        target="_blank"
                                        className={`openLink`}
                                        href={row.url}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {row.organization}
                                    </a>
                                </div>
                            )}
                            {this.props.title === 'Visa Status' && (
                                <div>
                                    <img
                                        className="tabularRowFlag"
                                        src={`flags/${row.location}.png`}
                                        alt={row.location}
                                    />
                                    {row.organization}
                                </div>
                            )}
                        </Typography>
                    </div>
                ))}
            </Paper>
        );
    }
}

BodyPart.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BodyPart);
