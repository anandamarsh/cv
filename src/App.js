import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles'

import './App.css';

import theme from './theme';
import TopNav from './components/TopNav';
import BodyPart from './components/BodyPart';
import Contact from './components/Contact';

import CV from './cv.json';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <TopNav/>
                <div className='bodySpacer'>
                {CV.body.map((bodyPart, index) => <BodyPart key={index} title={bodyPart.title} type={bodyPart.type} sections={bodyPart.sections}/>)}
                </div>
                <Contact/>
                <div className='fullCVMessage' style={{opacity:0}}>View full CV at <a href={window.location.origin}>{window.location.origin}</a></div>
            </MuiThemeProvider>
        );
    }

}

export default App;
