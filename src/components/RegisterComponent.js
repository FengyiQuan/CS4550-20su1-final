import React from "react";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {
    state = {
        username: '',
        password: '',
        type: null,
        error: null
    };

    register = () => {
        fetch("https://cs4550-20su1-jobigger-server.herokuapp.com/api/register", {
            body: JSON.stringify({
                                     username: this.state.username,
                                     password: this.state.password,
                                     jobs:[],
                                     type: this.state.type,
                                     role: 'JOB_SEEKER'
                                 }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
        .catch(e => {
            this.setState({
                error: 'Unable to register'
            })
        })
        .then(currentUser => {
            if(currentUser) {
                this.props.history.push("/profile")
            }
        })
    };


    render() {
        return (
            <div className="login">
                <div className="sign" align="center">
                    Register
                </div>

                <div className="form1">
                    {
                        this.state.error &&
                        <div className="alert alert-danger">
                            {this.state.error}
                        </div>
                    }
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

                    <select className="login-input"
                            value={this.state.type === null ? 'EMPLOYEE'
                                : this.state.type}
                            onChange={(e) => this.setState(
                                {type: e.target.value})}>
                        <option value='EMPLOYEE'>Employee</option>
                        <option value='JOB_SEEKER'>Job Seeker</option>
                        <option value='ADMIN'>Admin</option>
                    </select>

                    {
                        this.state.error &&
                        <div className="wrong" align="center">
                            {`${this.state.error}`}
                        </div>
                    }
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
                </div>
            </div>)
    }
}