import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ContactsContainer from '../containers/contactsContainer';
let history = createBrowserHistory();
class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Route exact path="/" component={ContactsContainer} />
                </React.Fragment>
            </Router>
        );
    }
}

export default Routes;
