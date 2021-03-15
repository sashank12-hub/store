import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthadmin,isAuthuser } from "./auth";    

export const LoggedInRedirect= function ({ path, Component }) {
    return (
        <Route path={path} exact
            render={props => isAuthadmin() ?
                <Redirect to="/store_manager/admin/medicine" /> :
                <Component {...props} />
            
            }
        />        
    )
}
export const LoggedInRedirectt= function ({ path, Component }) {
    return (
        <Route path={path} exact
            render={props => isAuthuser() ?
               <Redirect to= "store_manager/user/customers"/>:
                <Component {...props} />
            
            }
        />        
    )
}

