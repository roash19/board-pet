import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "./dashBoard/DashBoard";
import Schedule from './Schedule';
import Empty from "./Empty";

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={DashBoard} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/manage" component={Empty} />
                <Route path="/reports" component={Empty} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default Routers;