import React from 'react';
import {Link} from "react-router-dom";

export default class HomeComponent
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    keywordChanged = (event) =>
        this.setState({keyword: event.target.value});

    render() {
        return (
            <div className="jumbotron">
                <h2>Search Jobs</h2>
                <div className="input-group">
                    <input value={this.state.keyword}
                           onChange={this.keywordChanged}
                           className="form-control"
                           placeholder="keyword"/>
                    <div className="input-group-append">
                        {this.state.keyword !== '' &&
                         <Link to={`/table/jobs/${this.state.keyword}/`}
                               className="btn btn-primary">
                             Search
                         </Link>}
                        {this.state.keyword === '' &&
                         <Link to={`/`}
                               className="btn btn-primary">
                             Search
                         </Link>}

                    </div>
                </div>

            </div>
        )
    }
}
