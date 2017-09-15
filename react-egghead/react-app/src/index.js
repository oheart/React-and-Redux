import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App txt="this is the prop value" cat={5}/>, 
    document.getElementById('root')
);

