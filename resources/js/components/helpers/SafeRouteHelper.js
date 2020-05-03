import React from 'react';
import { Route, Redirect } from "react-router-dom";

const SafeRouteHelper = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={props => {
                if (localStorage.getItem('access_token')) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default SafeRouteHelper;
