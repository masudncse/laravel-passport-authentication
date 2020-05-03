import React, {useEffect, useState} from 'react';
import Header from './Header';

function Dashboard() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        loadUserData();
    }, []);

    function loadUserData() {
        axios.post('/api/auth/me')
            .then(response => {
                setUserData(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center"
                         style={{height: "calc(100vh - 56px)"}}>
                        <h1>Admin Panel</h1>
                        <h3>
                            Hi, {userData.name}
                        </h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;
