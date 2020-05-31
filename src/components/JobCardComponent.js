import React from "react";
import {Link} from "react-router-dom";

export default class JobCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: this.props.job
        }
    }

    render() {
        return (
            <div className="col mb-4">
                <div>
                    <img
                        src="https://cdn.pixabay.com/photo/2014/11/18/20/27/elections-536656_1280.png"
                        className="card-img-top"
                        alt={this.state.job.title}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/detail/${this.state.job.id}`}>
                                {this.state.job.title.replace(/(<([^>]+)>)/ig, '')}
                            </Link>
                        </h5>
                        <p className="card-text">
                            <small className="text-muted">
                                {this.state.job.company.display_name}
                            </small>
                        </p>
                        <p>
                            <small className="text-muted">
                                {this.state.job.location.display_name}
                            </small>
                        </p>

                        <button
                            className="btn btn-primary"
                            onClick={() => this.setEditing(true)}>
                            <i className="fa fa-angle-double-right"/>
                        </button>


                    </div>
                </div>
            </div>
        );
    }
}