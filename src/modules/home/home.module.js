import React from 'react';
import NotFound from '../not-found.component';
import { Switch, Route } from 'react-router-dom';

import Home from './home';

const HomeModule = ({ match }) => (
    <Switch>
        <Route path={ match.url } exact component={Home}/>
        <Route component={NotFound} />
    </Switch>
);

export default HomeModule;
