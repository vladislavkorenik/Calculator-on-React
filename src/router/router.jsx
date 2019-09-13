import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Calculator from "../screens/calculator";
import AddButton from "../screens/add-button";
import UserList from "../screens/user-list";
import CreateUser from "../screens/create-user";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/calculator" component={Calculator} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/add-button-page" component={AddButton} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
