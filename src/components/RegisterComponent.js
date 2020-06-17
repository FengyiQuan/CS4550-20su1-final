import React from "react";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {
    state = {
        username: '',
        password: ''
    };

    //TODO:创建wishlist
    register = () => {
        fetch("http://localhost:8080/api/register", {
            body: JSON.stringify({
                                     username: this.state.username,
                                     password: this.state.password
                                 }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .then(currentUser => this.props.history.push("/profile"))
    };

    render() {
        return (
            <div className="login">
                <div className="sign" align="center">
                    Register
                </div>
                <form className="form1">
                    <input className="login-input"
                           type="text"
                           align="center"
                           placeholder="Username"
                           value={this.state.username}
                           onChange={(event) =>
                               this.setState({username: event.target.value})}/>
                    <input className="login-input"
                           type="password"
                           align="center"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={(event) =>
                               this.setState({password: event.target.value})}/>
                    <button className="submit"
                            onClick={this.register}>
                        Sign Up
                    </button>

                    <div className="forgot" align="center">
                        <Link className='login-link'
                              to={`/login`}>
                            Login
                        </Link>
                    </div>

                    <div className="forgot" align="center">
                        <Link className='login-link'
                              to={`/`}>
                            Back
                        </Link>
                    </div>
                </form>
            </div>)
    }
}