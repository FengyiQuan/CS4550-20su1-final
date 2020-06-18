import React from "react";
import {Link} from "react-router-dom";
import {addToWishList, removeFromWishList} from "../services/WishListService"

export default class ProfileComponent extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        dob: '',
        type: '',
        currentTab: 'OVERVIEW'
    };

    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'GET',
            credentials: "include"
        })
            .then(response => {
                if (response.ok === false) {
                    this.props.history.push("/")
                } else {
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
        console.log(this.state.currentTab)
        return (
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                {this.state.username}
                            </div>
                            <div className="profile-usertitle-job">
                                {this.state.type}
                            </div>
                        </div>


                        <div className="profile-userbuttons">
                            <button type="button" className="btn btn-success btn-sm">Follow</button>
                            <button type="button" className="btn btn-danger btn-sm">Message</button>
                        </div>


                        <div className="profile-usermenu">
                            <ul className="list-group">
                                <li className={`list-group-item ${this.state.currentTab
                                                                  === 'OVERVIEW'
                                                                  ? 'profile-usermenu-active'
                                                                  : ''}`}>
                                    <a onClick={() => this.setState({currentTab: 'OVERVIEW'})}>
                                        <i className="fa fa-home"/>
                                        Overview
                                    </a>
                                </li>
                                <li className={`list-group-item ${this.state.currentTab
                                                                  === 'SETTINGS'
                                                                  ? 'profile-usermenu-active'
                                                                  : ''}`}>
                                    <a onClick={() => this.setState({currentTab: 'SETTINGS'})}>
                                        <i className="fa fa-user"/>
                                        Account Setting
                                    </a>
                                </li>
                                <li className={`list-group-item ${this.state.currentTab
                                                                  === 'WISH_LIST'
                                                                  ? 'profile-usermenu-active'
                                                                  : ''}`}>
                                    <a onClick={() => this.setState({currentTab: 'WISH_LIST'})}>
                                        <i className="fa fa-calendar-check-o"/>
                                        Wish List
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <Link to={'/'}>
                                        <i className="fa fa-backward"/>
                                        Back
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <a onClick={this.logout}>
                                        <i className="fa fa-backward"/>
                                        Logout
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        {(this.state.currentTab === 'SETTINGS' ||
                          this.state.currentTab === 'OVERVIEW') &&
                         <div>
                             <div className='form-group row'>
                                 <label className="col-md-2 col-form-label">
                                     Username:
                                 </label>

                                 <div className={'col-md-10'}>
                                     <input value={this.state.username}
                                            onChange={(e) => this.setState(
                                                {username: e.target.value})}
                                            className="form-control"
                                            title="Username"
                                            readOnly={true}/>
                                 </div>
                             </div>

                             <div className='form-group row'>

                                 <label className="col-md-2 col-form-label">
                                     Password:
                                 </label>

                                 <div className={'col-md-10'}>
                                     <input value={this.state.password}
                                            onChange={(e) => this.setState(
                                                {password: e.target.value})}
                                            className="form-control"
                                            title="Current Password"
                                            readOnly={this.state.currentTab === 'OVERVIEW'}/>
                                 </div>
                             </div>
                             <div className='form-group row'>
                                 <label className="col-md-2 col-form-label">
                                     Email:
                                 </label>
                                 <div className={'col-md-10'}>
                                     <input type="email"
                                            value={this.state.email || ''}
                                            onChange={(e) => this.setState({email: e.target.value})}
                                            className="form-control"
                                            title="email"
                                            readOnly={this.state.currentTab === 'OVERVIEW'}/>
                                 </div>
                             </div>
                             <div className='form-group row'>
                                 <label className="col-md-2 col-form-label">
                                     Date of Birth:
                                 </label>
                                 <div className={'col-md-10'}>
                                     <input
                                         type="date"
                                         value={this.state.dob === null ? (new Date())
                                                                        : this.state.dob}
                                         onChange={(e) => {

                                             this.setState({dob: e.target.value})
                                         }}
                                         className="form-control"
                                         title="dob"
                                         readOnly={this.state.currentTab === 'OVERVIEW'}/>
                                 </div>
                             </div>

                             <div className='form-group row'>
                                 <label className="col-md-2 col-form-label">
                                     Role:
                                 </label>
                                 <div className={'col-md-10'}>
                                     <select className="form-control"
                                             value={this.state.type === null ? 'EMPLOYEE'
                                                                             : this.state.type}
                                             onChange={(e) => this.setState(
                                                 {type: e.target.value})}
                                             disabled={this.state.currentTab === 'OVERVIEW'}>
                                         <option value='EMPLOYEE'>Employee</option>
                                         <option value='JOB_SEEKER'>Job Seeker</option>
                                         <option value='ADMIN'>Admin</option>
                                     </select>
                                 </div>
                             </div>
                             {this.state.currentTab === 'SETTINGS' &&
                              <button
                                  onClick={() => this.update()}
                                  className="btn btn-primary float-right">
                                  Update
                              </button>}

                         </div>}
                        {this.state.currentTab === 'WISH_LIST' &&
                         <div>afdasdfafsdasfafdasdfafsdasfafdasdfafsdasfafdasdfafsdasf
                         </div>}
                    </div>
                </div>
            </div>
        )

    }
}