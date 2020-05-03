import React, {Component} from 'react';
import Header from './Header';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/auth/login', {...this.state})
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token);
                this.props.history.push('/dashboard');
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "calc(100vh - 56px)"}}>
                    <form method="POST" className="text-center col-md-3" onSubmit={this.handleSubmit.bind(this)}>
                        <img className="mb-4"
                             src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                             width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                        <input type="email" name="email" value={this.state.email}
                               className="form-control"
                               onChange={this.handleChange.bind(this)}
                               placeholder="Email"/>

                        <input type="password" name="password" className="form-control"
                               value={this.state.password}
                               onChange={this.handleChange.bind(this)} placeholder="Password"/>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>

                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign in"/>

                        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
