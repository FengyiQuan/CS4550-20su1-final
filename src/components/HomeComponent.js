import React from 'react';
import {Link} from "react-router-dom";

export default class HomeComponent
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            role: 'VISITOR',
            username: '',
            loggedIn: false
        }
    }

    componentDidMount() {
        fetch("https://cs4550-20su1-jobigger-server.herokuapp.com/api/profile", {
            method: 'GET',
            credentials: "include"
        })
            .then(response => response.json())
            .catch(e => this.setState({role: 'visitor'}))


            // .then(response => response.json())
            //     .catch(e => {
            //       console.log(e)
            //         // this.props.history.push("/")
            //     })

            .then(user => {
                // console.log(user)
                if (user) {
                    this.setState({
                                      role: user.role,
                                      username: user.username,
                                      loggedIn: true
                                  })
                }
            })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState!==this.state){
    //         console.log('update')
    //     }
    // }

    render() {
        // console.log(this.state.role)
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
                                           className='none-outline searchInput'/>
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
                            !this.state.loggedIn &&

                            <Link to={`/login`}
                                  className="home-link pr-5">
                                Sign In
                            </Link>
                        }
                        {!this.state.loggedIn &&
                         <Link to={`/register`}
                               className="home-link pr-5">
                             Sign Up
                         </Link>
                        }
                        {this.state.loggedIn &&
                         <Link to={`/profile`}
                               className="home-link pr-5">
                             {`Signed in as ${this.state.username}`}
                         </Link>
                        }

                        {/*{this.state.role === 'ADMIN' &&*/}
                        {/* <Link to={"/users"}*/}
                        {/*       className="home-link"> Users</Link>*/}
                        {/*}*/}
                    </div>
                </div>
            </div>);

    }
}
