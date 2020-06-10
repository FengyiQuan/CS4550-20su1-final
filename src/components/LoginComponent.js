import React from "react";
import {Link} from "react-router-dom";

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameFld: '',
            pwdFld: ''
        }
    }

    render() {
        console.log(this)
        return (
            <div>
                <h1>Sign In</h1>
                <div>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username:
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="usernameFld"
                                   type="text"
                                   placeholder="Alice"
                                   title="Use this username to login"
                                   value={this.state.usernameFld}
                                   onChange={(event) => this.setState({
                                                                          usernameFld: event.target.value
                                                                      })}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Password:
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="passwordFld"
                                   placeholder="123qwe#$%"
                                   value={this.state.pwdFld}
                                   onChange={(event) => this.setState({
                                                                          pwdFld: event.target.value
                                                                      })}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <a className="btn btn-primary btn-block"
                               href="#">
                                Sign in
                            </a>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div className="col-6">
                                    <Link to={`/register`}
                                          className="float-right">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}