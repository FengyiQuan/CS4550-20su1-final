import React from "react";
import {Link} from "react-router-dom";
import {removeFromWishList} from "../services/WishListService"

export default class ProfileComponent extends React.Component {
    state = {
        username: '',
        profileUser: '',
        password: '',
        email: '',
        dob: '',
        type: '',
        currentTab: 'OVERVIEW',
        wishList: []
    };

    componentDidMount() {
        if (this.props.match.params.username === undefined) {

            this.findProfileByCurrentUser()
        } else {
            this.findProfileByUsername()
        }
    }

    isLookingForOtherProfile = () => {
        return this.state.username !== this.state.profileUser;
    }

    findProfileByCurrentUser = () => {
        fetch("http://localhost:8080/api/profile", {
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET',
            credentials: "include"
        })
            .then(response => response.json())
            .catch(e => {
                console.log(e)
                // this.props.history.push("/")
            })

            .then(user => {
                // console.log(user)
                if (user) {
                    this.setState({
                                      username: user.username,
                                      profileUser: user.username,
                                      password: user.password,
                                      email: user.email,
                                      dob: user.dob,
                                      type: user.role,
                                      wishList: user.jobs
                                  })
                } else {
                    window.location.reload();
                }
            })
    }

    findProfileByUsername = () => {
        fetch("https://cs4550-20su1-jobigger-server.herokuapp.com/api/profile", {
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET',
            credentials: "include"
        })
            .then(response => response.json())
            .catch(e => {
                console.log(e)
                // this.props.history.push("/")
            })

            .then(user => {
                // console.log(user)
                if (user) {
                    this.setState({
                                      username: user.username,

                                  })
                }
            });
        fetch(`https://cs4550-20su1-jobigger-server.herokuapp.com/api/profile/${this.props.match.params.username}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET',
            credentials: "include"
        })
            .then(response => response.json())
            // .then(e => console.log(e))
            .then(user => {
                // console.log(user)
                if (user) {
                    this.setState({
                                      profileUser: user.username,
                                      password: user.password,
                                      email: user.email,
                                      dob: user.dob,
                                      type: user.role,
                                      wishList: user.jobs
                                  })
                }
                // else {
                //     window.location.reload();
                // }
            })
    }

    update = () => {
        fetch("https://cs4550-20su1-jobigger-server.herokuapp.com/api/profile", {
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
        fetch("https://cs4550-20su1-jobigger-server.herokuapp.com/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))
        // .then(console.log("update logout"))

    }

    render() {
        // console.log(this.isLookingForOtherProfile())
        // this.findProfileByUsername()
        // console.log('profile:' + this.state.profileUser)
        // console.log('login' + this.state.username)
        return (
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                {this.state.profileUser}
                            </div>
                            <div className="profile-usertitle-job">
                                {this.state.type}
                            </div>
                        </div>


                        <div className="profile-userbuttons">
                            <button type="button" className="btn btn-success btn-sm">Follow
                            </button>
                            <button type="button" className="btn btn-danger btn-sm">Message
                            </button>
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
                                {!this.isLookingForOtherProfile() &&
                                 <li className={`list-group-item ${this.state.currentTab
                                                                   === 'SETTINGS'
                                                                   ? 'profile-usermenu-active'
                                                                   : ''}`}>
                                     <a onClick={() => this.setState({currentTab: 'SETTINGS'})}>
                                         <i className="fa fa-user"/>
                                         Account Setting
                                     </a>
                                 </li>}
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
                                {!this.isLookingForOtherProfile() &&
                                 <li className="list-group-item">
                                     <a onClick={this.logout}>
                                         <i className="fa fa-backward"/>
                                         Logout
                                     </a>
                                 </li>}

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
                                     <input value={this.state.profileUser}
                                            onChange={(e) => this.setState(
                                                {profileUser: e.target.value})}
                                            className="form-control"
                                            title="Username"
                                            readOnly={true}/>
                                 </div>
                             </div>

                             {!this.isLookingForOtherProfile() &&
                              <div>
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
                                                 onChange={(e) => this.setState(
                                                     {email: e.target.value})}
                                                 className="form-control"
                                                 title="email"
                                                 readOnly={this.state.currentTab === 'OVERVIEW'}/>
                                      </div>
                                  </div>
                              </div>}
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
                         <div>
                             <ul className="list-group">
                                 {this.state.wishList.map(
                                     job =>
                                         <li className="list-group-item d-flex justify-content-between align-items-center"
                                             key={`${this.state.profileUser}wishList${job.jobId}`}>
                                             <Link to={`/detail/${job.jobId}`}>{job.jobName}</Link>
                                             {!this.isLookingForOtherProfile() &&
                                              <span className="badge badge-pill">
                                                 <button className='btn'
                                                         onClick={() => removeFromWishList(
                                                             job.jobId, this.state.username).then(
                                                             status => this.setState(prevState => ({
                                                                 wishList: prevState
                                                                     .wishList.filter(
                                                                         j => job !== j)
                                                             })))}>
                                                     <i className='fa fa-trash'/>
                                                 </button>
                                             </span>}
                                         </li>)}

                             </ul>
                         </div>}
                    </div>
                </div>
            </div>
        )

    }
}