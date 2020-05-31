import React from "react";
import {Link} from "react-router-dom";

export default class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameFld: '',
            pwdFld: '',
            verifyPwdFld: ''

        }

    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div>
                    <div className="form-group row">
                        <label htmlFor="usernameFld"
                               className="col-sm-2 col-form-label">Username: </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="usernameFld"
                                   type="text"
                                   placeholder="joe123"
                                   title="Use this username to login"
                                   value={this.state.usernameFld}
                                   onChange={(event) => this.setState({
                                                                          usernameFld: event.target.value
                                                                      })}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld"
                               className="col-sm-2 col-form-label">Password: </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="passwordFld"
                                   type="password" value={this.state.pwdFld}
                                   onChange={(event) => this.setState({
                                                                          pwdFld: event.target.value
                                                                      })}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifyPasswordFld"
                               className="col-sm-2 col-form-label"> Verify Password:</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="verifyPasswordFld"
                                   type="password"
                                   value={this.state.verifyPwdFld}
                                   onChange={(event) => this.setState({
                                                                          verifyPwdFld: event.target.value
                                                                      })}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <a href="#"
                               className="btn btn-primary btn-block"
                               id="registerBtn">
                                Sign Up
                            </a>
                            <div className="row">
                                <div className="col-6">
                                    <Link to={`/login`}>Login</Link>
                                </div>
                                <div className="col-6">
                                    <Link to="/"
                                          className="float-right">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}