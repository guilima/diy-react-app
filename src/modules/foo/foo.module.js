import React from 'react';
import NotFound from '../not-found.component';
import { Switch, Route } from 'react-router-dom';

import Foo from './foo'

const FooModule = ({ match }) => (
    <Switch>
        <Route path={ match.url } component={Foo}/>
        <Route component={NotFound} />
    </Switch>
);

export default FooModule;
