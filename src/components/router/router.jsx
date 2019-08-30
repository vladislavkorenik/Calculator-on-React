import React from 'react' 

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Calculator from '../calculator';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = { Calculator }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;