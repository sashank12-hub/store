import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { setAuthadmin,setAuthuser, isAuthadmin,isAuthuser } from './Routes/auth';
import './Navbar.css';


function Navbar(props) {

    const handleLogout = () => {
        setAuthadmin(false);
        setAuthuser(false);
        return props.history.push('/');
    }
    const  isActive = {
        'medicine': false,
        'team': false,
        'customers': false
    };
    const pageName=props.location.pathname.split('/')[3];
     isActive[pageName]=true;
     console.log(pageName)
    
   
    return (
        <div className="Topbar">
            <div className="LeftMenu">
                <div className="LogoWrapper">
                    <Link to='/store_manager'>
                        <img src="https://image.freepik.com/free-vector/medical-pharmacy-logo_7888-26.jpg" 
                            alt="Logo" 
                        />
                    </Link>
                    
                </div>
                {isAuthadmin()  &&
                    <nav>
                        <Link className={isActive['medicine'] ? "MenuItem MenuItemActive" : "MenuItem"} to='/store_manager/admin/medicine' >medicines</Link>
                        <Link className={isActive['team'] ? "MenuItem MenuItemActive" : "MenuItem"} to='/store_manager/admin/team' >Team</Link>
                        <Link className={isActive['orders'] ? "MenuItem MenuItemActive" : "MenuItem"} to='/store_manager/user/customers' >customers</Link>
                        <button 
                            id="logout-btn" 
                            className="btn btn-danger LogoutBtn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </nav> 
                    }

                    {isAuthuser() &&
                        <nav>
                            <Link className="MenuItem MenuItemActive" to='/store_manager/user/customers' >customers</Link>
                            <button 
                                id="logout-btn" 
                                className="btn btn-danger LogoutBtn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </nav> 



                    }
                
               
            </div>
        </div>
    )
}

export default withRouter(Navbar);
