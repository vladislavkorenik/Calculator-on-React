import React from 'react' 

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Calculator from '../calculator';
import AddButton from '../add-button';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = { Calculator }/>
                <Route path = '/add-button-page' component = { AddButton }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;