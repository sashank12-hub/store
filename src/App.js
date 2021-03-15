import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import {LoggedInRedirect,LoggedInRedirectt} from './Routes/LoggedInRedirect';
import {PrivateRoute1,PrivateRoute2,PrivateRoute} from './Routes/PrivateRoute';
import Navbar from './Navbar';
import Login from './Login'
import Loginn from './Loginn'
import View from './View'
import Customer from'./Customer'

import One from "./one";
import Two from "./Two"
const App = () => (
  
    <Router>
      <Navbar />
   
   
   <Switch>
       <Route path="/" exact component={View}/>
     <LoggedInRedirect path="/store_manager/login_admin" exact Component={Login} />
        
         <LoggedInRedirectt path="/store_manager/login_user" exact Component={Loginn} />
     <PrivateRoute1 exact path="/store_manager/admin/medicine" Component={One} />
     <PrivateRoute1 exact path="/store_manager/admin/team" Component={Two} />
     <PrivateRoute exact path="/store_manager/user/customers" Component={Customer} />
    
    
   </Switch> 
  </Router>
 
)
  


export default App;

// <PrivateRoute exact path="/store_manager/user/orders" Component={Orders} />