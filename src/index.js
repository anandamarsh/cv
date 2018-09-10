import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import urlParams from './util';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

if(urlParams.printSettings){
    document.body.classList.add("printing");
}

registerServiceWorker();
