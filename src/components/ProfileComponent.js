import React from "react";
import {Link} from "react-router-dom";

export default class ProfileComponent extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        dob:'',
        type: ''
    };

    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
              if(response.ok === false) {
                this.props.history.push("/")
              }
              else {
                return response.json()
              }
            })

        // .then(response => response.json())
        //     .catch(e => {
        //       console.log(e)
        //         // this.props.history.push("/")
        //     })

            .then(user => {
                // console.log(user)
                if (user) {
                    this.setState({
                                      username: user.username,
                                      password: user.password,
                                      email: user.email,
                                      dob: user.dob,
                                      type: user.role
                                  })
                }
            })
    }

    update = () => {
        fetch("http://localhost:8080/api/profile", {
            body: JSON.stringify({
                                     username: this.state.username,
                                     password: this.state.password,
                                     email: this.state.email,
                                     dob: this.state.dob,
                                     role: this.state.type
                                 }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            credentials: "include"
        })
            .then(response => response.json())
            .then(user => this.setState({
                                    username: user.username,
                                    password: user.password,
                                    email: user.email,
                                    dob: user.dob,
                                    type: user.role
                                        }))
    }

    logout = () => {
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))
      // .then(console.log("update logout"))

    }

    render() {
        return (
            <div>
                <h1>Profile For {this.state.username}</h1>

              <Link to={'/'}>
                <i className="fa fa-home btn-lg"/>
              </Link>

              <div className='form-group row'>
                <label className="col-md-2 col-form-label">
                  Username:
                </label>
                <div className={'col-md-10'}>
                  <input
                      value={this.state.username}
                      onChange={(e) => this.setState({username: e.target.value})}
                      className="form-control"
                      title="Username"/>
                </div>
              </div>

              <div className='form-group row'>
                <label className="col-md-2 col-form-label">
                  Password:
                </label>
                <div className={'col-md-10'}>
                  <input
                      value={this.state.password}
                      onChange={(e) => this.setState({password: e.target.value})}
                      className="form-control"
                      title="Current Password"/>
                </div>
              </div>

              <div className='form-group row'>
                <label className="col-md-2 col-form-label">
                  Email:
                </label>
                <div className={'col-md-10'}>
                  <input
                      type="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({email: e.target.value})}
                      className="form-control"
                      title="email"/>
                </div>
              </div>

              <div className='form-group row'>
                <label className="col-md-2 col-form-label">
                  Date of Birth:
                </label>
                <div className={'col-md-10'}>
                  <input
                      type="date"
                      value={this.state.dob === null ? (new Date()) : this.state.dob}
                      onChange={(e) => {

                        this.setState({dob: e.target.value})
                        // console.log(this.state.dob)
                      }}
                      className="form-control"
                      title="dob"/>
                </div>
              </div>

              <div className='form-group row'>
                <label className="col-md-2 col-form-label">
                  Role:
                </label>
                <div className={'col-md-10'}>
                  <select className="form-control"
                          value={this.state.type === null ? 'EMPLOYEE' : this.state.type}
                          onChange={(e) => this.setState({type: e.target.value})}>
                    <option value='EMPLOYEE'>Employee</option>
                    <option value='JOB_SEEKER'>Job Seeker</option>
                    <option value='ADMIN'>Admin</option>
                  </select>
                  </div>
              </div>

                <button
                    onClick={() => this.update()}
                    className="btn btn-primary">
                    Update
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => this.logout()}>
                    Sign out
                </button>
            </div>
        )
    }
}