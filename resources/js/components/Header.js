import React from 'react';
import {Link} from 'react-router-dom';

function handleLogout(event) {
    event.preventDefault();
    axios.post('/api/auth/logout')
        .then(response => {
            localStorage.clear();
            window.location.href = '/login';
        }).catch(err => {
        console.log(err);
    })
}

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            {localStorage.getItem('access_token') ?
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link> : null}

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item float-right mr-3">
                        <Link className="nav-link" to="/login">
                            <i className="fa fa-sign-in" aria-hidden="true"/>
                            &nbsp;Login
                        </Link>
                    </li>
                    {localStorage.getItem('access_token') ? <li className="nav-item float-right">
                        <Link className="nav-link" to="/logout" onClick={(event) => {
                            handleLogout(event);
                        }
                        }>
                            <i className="fa fa-power-off" aria-hidden="true"/>
                            &nbsp;Logout
                        </Link>
                    </li> : <li className="nav-item float-right">
                        <Link className="nav-link" to="/register">
                            <i className="fa fa-user-o" aria-hidden="true"/>
                            &nbsp;Register
                        </Link>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
