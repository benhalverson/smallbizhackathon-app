import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../App.css';
import SearchComponent from '../components/SearchComponent';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={SearchComponent} exact={true} />
        {/* <Route path="/create" component={CreateExpensesPage} />
        <Route path="/edit/:id" component={EditExpensesPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
