import React from "react";
import {Link} from "react-router-dom";

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginStatus: false,
            error: null
        }
    }

  login = () => {
    fetch("http://localhost:8080/api/login", {
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password}),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())
    .catch(e => {
      this.setState({error: "Wrong username or password, try again",
        username: "", password: ""})
      this.props.history.push("/login")
    })
    .then(currentUser => {
      if(currentUser)
        this.props.history.push("/profile")
    })

  }

    render() {
        return (
            <div className="login">
                <div className="sign" align="center">
                    Sign in
                </div>
                <div className="form1">
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

                  {
                    this.state.error &&
                    <div className="wrong" align="center">
                      {`${this.state.error}`}
                    </div>
                  }

                    <button className="submit"
                            onClick={this.login}>
                        Login
                    </button>
                    <div className="forgot" align="center">
                        <a className='login-link'
                           href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="forgot" align="center">
                        <Link className='login-link'
                              to={`/register`}>
                            Register
                        </Link>
                    </div>
                    {/*<Link to={`/profile`}>Profile</Link>*/}
                </div>
            </div>
        )
    }
}