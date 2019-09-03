import React from 'react' 

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Calculator from '../calculator';
import AddButton from '../add-button';
import UserList from '../user-list';
import CreateUser from '../create-user';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = { UserList }/>
                <Route exact path = '/calculator' component = { Calculator }/>
                <Route path = '/create-user' component = { CreateUser }/>
                <Route path = '/add-button-page' component = { AddButton }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;