import React from "react";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {
    state = {
        username: '',
        password: ''
    };

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
            .then(currentUser => this.props.history.push("/profiles"))
    };

    render() {
        return (
            <div className="login">
                <p className="sign" align="center">
                    Register
                </p>
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
                    <a className="submit ">Sign Up</a>

                    <p className="forgot" align="center">
                        <Link className='login-link'
                              to={`/login`}>
                            Login
                        </Link>
                    </p>
                </form>
            </div>)
        // (
        //     <div>
        //         <h1>Register</h1>
        //         <div>
        //             <div className="form-group row">
        //                 <label htmlFor="usernameFld"
        //                        className="col-sm-2 col-form-label">Username: </label>
        //                 <div className="col-sm-10">
        //                     <input className="form-control"
        //                            id="usernameFld"
        //                            type="text"
        //                            placeholder="joe123"
        //                            title="Use this username to login"
        //                            value={this.state.usernameFld}
        //                            onChange={(event) => this.setState({
        //                                                                   usernameFld:
        // event.target.value })}/> </div> </div> <div className="form-group row"> <label
        // htmlFor="passwordFld" className="col-sm-2 col-form-label">Password: </label> <div
        // className="col-sm-10"> <input className="form-control" id="passwordFld" type="password"
        // value={this.state.pwdFld} onChange={(event) => this.setState({ pwdFld:
        // event.target.value })}/> </div> </div> <div className="form-group row"> <label
        // htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label"> Verify
        // Password:</label> <div className="col-sm-10"> <input className="form-control"
        // id="verifyPasswordFld" type="password" value={this.state.verifyPwdFld} onChange={(event)
        // => this.setState({ verifyPwdFld: event.target.value })}/> </div> </div> <div
        // className="form-group row"> <label className="col-sm-2 col-form-label"/> <div
        // className="col-sm-10"> <button onClick={this.register} className="btn btn-primary
        // btn-block"> Register </button> <div className="row"> <div className="col-6"> <Link
        // to={`/login`}>Login</Link> </div> <div className="col-6"> <Link to="/"
        // className="float-right">Cancel</Link> </div> </div> </div> </div> </div> </div> )
    }
}