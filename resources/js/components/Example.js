import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import SafeRouteHelper from './helpers/SafeRouteHelper';

function Example() {
    return (
        <Router>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/register'} component={Register}/>

            <SafeRouteHelper exact path={'/dashboard'} component={Dashboard}/>
        </Router>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
