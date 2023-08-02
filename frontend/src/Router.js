import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoggedArea from './pages/LoggedArea';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/dashboard" exact component={LoggedArea}/>
      </Switch>
    </BrowserRouter>
  )
}
