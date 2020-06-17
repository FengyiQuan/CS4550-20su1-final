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

    login = () => {
        fetch("http://localhost:8080/api/login", {
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
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(currentUser => {
                if (currentUser) {
                    this.props.history.push("/profile")
                }
            })

    }

    render() {
        return (
            <div className="login">
                <p className="sign" align="center">
                    Sign in
                </p>
                <form className="form1">
                    <input className="login-input"
                           type="text"
                           align="center"
                           placeholder="Username"
                           value={this.state.usernameFld}
                           onChange={(event) =>
                               this.setState({usernameFld: event.target.value})}/>
                    <input className="login-input"
                           type="password"
                           align="center"
                           placeholder="Password"
                           value={this.state.pwdFld}
                           onChange={(event) =>
                               this.setState({pwdFld: event.target.value})}/>
                    <a className="submit ">Sign in</a>
                    <p className="forgot" align="center">
                        <a className='login-link'
                           href="#">
                            Forgot Password?
                        </a>
                    </p>
                    <p className="register" align="center">
                        <Link className='login-link'
                              to={`/register`}>
                            Register
                        </Link>
                    </p>
                </form>
            </div>)
        // (<div>
        //         <h1>Sign In</h1>
        //         <div>
        //             <div className="form-group row">
        //                 <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
        //                     Username:
        //                 </label>
        //                 <div className="col-sm-10">
        //                     <input className="form-control"
        //                            id="usernameFld"
        //                            type="text"
        //                            placeholder="Alice"
        //                            title="Use this username to login"
        //                            value={this.state.usernameFld}
        //                            onChange={(event) => this.setState({
        //                                                                   usernameFld:
        // event.target.value })}/> </div> </div> <div className="form-group row"> <label
        // htmlFor="passwordFld" className="col-sm-2 col-form-label"> Password: </label> <div
        // className="col-sm-10"> <input type="password" className="form-control" id="passwordFld"
        // placeholder="123qwe#$%" value={this.state.pwdFld} onChange={(event) => this.setState({
        // pwdFld: event.target.value })}/> </div> </div> <div className="form-group row"> <label
        // className="col-sm-2 col-form-label"/> <div className="col-sm-10"> <button className="btn
        // btn-primary btn-block" onClick={this.login}> Sign in </button> <div className="row">
        // <div className="col-6"> <a href="#">Forgot Password?</a> </div> <div className="col-6">
        // <Link to={`/register`} className="float-right">Sign up</Link> </div> </div> </div>
        // </div> </div> </div> )
    }
}