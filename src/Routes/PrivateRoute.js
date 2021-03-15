import React   from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthuser, isAuthadmin } from './auth';

export const  PrivateRoute1=function({ path, Component }) {

    return (
        <Route path={path} exact
        render={props => isAuthadmin() ?
        <Component {...props}  /> :
        <Redirect to="/store_manager" />
        }
        />
        
    )
}
export const  PrivateRoute2=function({ path, Component }) {

    return (
        <Route path={path} exact
        render={props => isAuthuser() ?
        <Component {...props}  /> :
        <Redirect to="/store_manager" />
        }
        />
        
    )
}
export const  PrivateRoute=function({ path, Component }) {

    return (
        <Route path={path} exact
        render={props =>( isAuthadmin() ||isAuthuser()) ?
        <Component {...props}  /> :
        <Redirect to="/store_manager" />
        }
        />
        
    )
}

