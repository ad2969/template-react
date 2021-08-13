import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import pages
import Home from "./Home";
import NotFound from "./NotFound";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
