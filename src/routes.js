import React from 'react';
import HomeModule from './modules/home/home.module';
import FooModule from './modules/foo/foo.module';
import NotFound from './modules/not-found.component';
import { Switch, Route } from 'react-router-dom';
import './vendors.scss';

import { hot } from 'react-hot-loader'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomeModule}/>
        <Route path='/foo' component={FooModule} />
        <Route component={NotFound} />
    </Switch>
)

export default hot(module)(Routes)
