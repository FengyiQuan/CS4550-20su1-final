import React from "react";
import {Link} from "react-router-dom";
import {createJob, findJobById} from "../services/JobService";
import {addToWishList} from "../services/WishListService"

export default class JobCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: this.props.job
        }
    }

    addToWishList = () => {
        if (findJobById(this.state.job.id)) {
            // console.log('create')
            return createJob({jobId: this.props.job.id, jobName: this.props.job.title})
                .then(() => addToWishList(this.state.job.id, this.props.username))

        } else {
            return addToWishList(this.state.job.id, this.props.username)
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

                        {this.props.type === 'JOB_SEEKER' &&
                         <button className="btn btn-danger"
                                 onClick={() => this.addToWishList()}>

                             <i className="fa fa-heart"/>
                         </button>}

                    </div>
                </div>
            </div>
        );
    }
}