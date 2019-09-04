import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ReactPlayer from 'react-player';
import urlParams from '../util';

const styles = (theme) => ({
    fullText: {
        letterSpacing: '0.5px',
        paddingTop: '1.25em'
    },
    video: {
        margin: '1em auto'
    },
    techStack: {
        position: 'absolute',
        right: '1.5em',
        bottom: '1em',
        textAlign: 'center'
    },
    techStack_img: {
        height: '2em',
        verticalAlign: 'baseline',
        marginBottom: '0.5em'
    }
});

class SectionDetails extends React.Component {
    state = { value: urlParams.printSettings === 'detailed' ? 1 : 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        const Techstack = (props) => {
            return (
                <div className={classes.techStack + ' techStack'}>
                    {props.techStack.map((tech) => (
                        <div key={tech}>
                            <img
                                className={classes.techStack_img}
                                src={`techstack/${tech}.png`}
                                alt={tech}
                                title={tech}
                            />
                        </div>
                    ))}
                </div>
            );
        };

        return (
            <ExpansionPanelDetails style={{ display: 'block', position: 'relative' }}>
                <Tabs
                    className="expansionPanelTabs"
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    <Tab label="Summary" />
                    <Tab label="Details" />
                    {this.props.video && <Tab label="Video" />}
                </Tabs>
                {this.state.value === 0 && (
                    <Typography container="div" className={classes.fullText + ' fullText'} variant="body2">
                        <div dangerouslySetInnerHTML={{ __html: this.props.summary }} />
                        <Techstack techStack={this.props.techStack} />
                    </Typography>
                )}
                {this.state.value === 1 && (
                    <Typography container="div" className={classes.fullText + ' fullText'} variant="body2">
                        <div dangerouslySetInnerHTML={{ __html: this.props.fullText }} />
                    </Typography>
                )}
                {this.state.value === 2 && <ReactPlayer className={classes.video} url={this.props.video} playing />}
            </ExpansionPanelDetails>
        );
    }
}

SectionDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionDetails);
