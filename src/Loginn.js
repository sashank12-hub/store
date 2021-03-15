import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { setAuthuser} from './Routes/auth';

import './Login.css';


function Loginn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => setUsername(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const initiateLogin =  e =>  {
        e.preventDefault();
        if(!username)  {
            alert('username is required');
            return;
        }
        if(!password) {
            alert('password is required')
            return;
        }
        if(username!==password) {
            alert('Please enter valid credentials');
            return;
        }
       
        if(username == password && username=="test-sales"){
            setAuthuser(true);
            alert('Login Successful');
            props.history.push('/store_manager/user/orders'); 
            return;

        }
        else{
            alert('check credentials')
        }
         
    }

    return (
        <Fragment>
            <main className="MainContainer">
            <h1>Sales Executive LOGIN</h1>
            <div>
                <form className="LoginForm">
                    
                    <input 
                        className="InputField" 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter Username" />
                    <input 
                        className="InputField" 
                        type="password"
                         name="password" 
                         id="password" 
                         value={password}
                         onChange={handlePasswordChange}
                         placeholder="Enter Password" />
                    <button 
                        className="Button" 
                        id="login-btn"
                        onClick={initiateLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
            </main>
        </Fragment>
    )
}

export default Loginn;
