import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/index';
import About from '../About/index';
import Projects from '../Projects/index';
import Contact from '../Contact/index';

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={About} /> 
        <Route exact path='/projects' component={Projects} /> 
        <Route exact path='/contact' component={Contact} /> 
    </Switch>
)

export default Main;