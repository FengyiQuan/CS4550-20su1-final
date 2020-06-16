import React from 'react';
import {Link} from "react-router-dom";

export default class HomeComponent
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            role: 'visitor'
        }
    }

    keywordChanged = (event) =>
        this.setState({keyword: event.target.value});

    changeRole = (role) =>
        this.setState({role: role});

    render() {
        return (
            <div>
                <h2>Search Jobs</h2>
                <h3>as {this.state.role}</h3>
                <Link to='/PROTOTYPE'>WIKI</Link>
                {/*<div className="input-group">*/}
                {/*<input value={this.state.keyword}*/}
                {/*       onChange={this.keywordChanged}*/}
                {/*       className="form-control"*/}
                {/*       placeholder="keyword"/>*/}

                <div id="cover">
                    <form method="get" action="">
                        <div className="tb">
                            <div className="td">
                                <input type="text" placeholder="Search" required/>
                            </div>
                            <div className="td" id="s-cover">
                                <button type="submit">
                                    <div id="s-circle"/>
                                    <span/>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <Link to={`/login`}>Sign in</Link>
                    </div>
                    <div className="col-6">
                        <Link to={`/register`}
                              className="float-right">Sign up</Link>
                    </div>
                </div>
                {/*<div className="input-group-append">*/}
                {/*    {this.state.keyword !== '' &&*/}
                {/*     <Link to={`/table/jobs?keyword=${this.state.keyword}`}*/}
                {/*           className="btn btn-primary">*/}
                {/*         Search*/}
                {/*     </Link>}*/}
                {/*    {this.state.keyword === '' &&*/}
                {/*     <Link to={`/`}*/}
                {/*           className="btn btn-primary">*/}
                {/*         Search*/}
                {/*     </Link>}*/}
                {/*</div>*/}
                {/*</div>*/}
                <div>

                </div>

            </div>
        )
    }
}
