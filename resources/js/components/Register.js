import React from 'react';
import Header from './Header';

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center"
                         style={{height: "calc(100vh - 56px)"}}>
                        <h1>Register Page</h1>
                        <h3>The process is underdevelopment.</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
