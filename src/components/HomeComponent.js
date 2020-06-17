import React from 'react';
import {Link} from "react-router-dom";

export default class HomeComponent
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            role: 'visitor',
            username: '',
            loggedin: false
        }
    }


    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
        .then(response => {
            if(response.ok === false) {
                this.setState({role: 'visitor'})
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
                    role:user.role,
                    username: user.username,
                    loggedin: true
                })
            }
        })
    }




    render() {
        return (
            <div className="form-group">
                <div className="form-group">
                    <div className="row" id='cover'>
                        <form>
                            <div className='tb'>
                                <div className='td'>
                                    <input value={this.state.keyword}
                                           onChange={(event) =>
                                               this.setState({keyword: event.target.value})}
                                           type="text"
                                           placeholder="Search"
                                           className='none-outline searchInput'
                                           required/>
                                </div>
                                <div className='td' id='s-cover'>

                                    <Link
                                        to={`/table/jobs?keyword=${this.state.keyword}`}>
                                        <button
                                            className='searchBtn none-outline' type="submit">
                                            <div id='s-circle'/>
                                            <span className='searchSpan'/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row float-right ">
                        <Link to='/PROTOTYPE'
                              className="home-link pr-5">
                            WIKI
                        </Link>

                        {
                            !this.state.loggedin &&

                            <Link to={`/login`}
                                  className="home-link pr-5">
                                Sign In
                            </Link>
                        }
                        {!this.state.loggedin &&
                            <Link to={`/register`}
                            className="home-link">
                            Sign Up
                            </Link>
                        }
                        {this.state.loggedin &&
                        <Link to={`/profile`}
                              className="home-link">
                            {`Signed in as ${this.state.username}`}
                        </Link>
                        }

                    </div>
                </div>
            </div>);

    }
}
