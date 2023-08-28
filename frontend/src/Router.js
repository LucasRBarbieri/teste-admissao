import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoggedArea from './pages/LoggedArea';
import OperationPage from './pages/OperationPage';
import OperationList from './pages/OperationsList';
import PackagePage from './pages/PackagePage';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/dashboard" exact component={LoggedArea}/>
        <Route path="/operation" exact component={OperationPage} />
        <Route path="/operation-list" exact component={OperationList} />
        <Route path="/package" exact component={PackagePage} />
      </Switch>
    </BrowserRouter>
  )
}
