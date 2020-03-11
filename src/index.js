import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import store from './store';




ReactDOM.render(
            <Provider store = {store}>
                <ErrorBoundry>
                    <App />
                </ErrorBoundry>
            </Provider>, 
    document.getElementById('root'));




