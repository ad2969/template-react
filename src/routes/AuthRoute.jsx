import React from "react";
import { Route } from "react-router-dom";

import NotFound from "./NotFound";
import Forbidden from "./Forbidden";

// Route Wrapper that checks first if the user has been authenticated
const AuthRoute = ({ isAuthenticated, component, altComponent, ...rest }) => {
    return (
        <Route {...rest} render={() => (
            isAuthenticated === true
                ? component || <NotFound />
                : altComponent || <Forbidden />
        )} />
    );
};

export default AuthRoute;
