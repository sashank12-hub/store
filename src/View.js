import React from 'react'
import { withRouter, Link } from 'react-router-dom';
export default function View() {
    return (<>
        <div className="view">
            <div className='view1'>
            <Link className="btn btn-success" to="/store_manager/login_admin">Login As Store Manager</Link>
            <Link className="btn btn-warning" to="/store_manager/login_user">Login As Sales Executive</Link></div>
        </div>
        </>
    )
}
