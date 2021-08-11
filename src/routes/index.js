import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "../components/header";

// import pages
import Home from "./Home";
import NotFound from "./NotFound";

function Routes () {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
