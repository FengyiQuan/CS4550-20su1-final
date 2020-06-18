import React from "react";
import {Link} from "react-router-dom";
import {createJob, findJobById} from "../services/JobService"

import {addToWishList} from "../services/WishListService"

export default class JobRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: this.props.job,
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

        // console.log(this.props.type)
        // console.log(this)
        return (
            <tr>
                <td>{this.state.job.title.replace(/(<([^>]+)>)/ig, '')}</td>
                <td className="d-none d-sm-table-cell">{this.state.job.company.display_name}</td>
                <td className="d-none d-md-table-cell">{this.state.job.location.display_name}</td>
                <td>
                    <Link to={`/detail/${this.state.job.id}`}>
                        <button className="btn btn-primary"
                                onClick={this.ok}>
                            <i className="fa fa-angle-double-right"/>
                        </button>
                    </Link>
                    {this.props.type === 'JOB_SEEKER' &&
                     <button className="btn btn-danger"
                             onClick={() => this.addToWishList()}>

                         <i className="fa fa-heart"/>
                     </button>}
                </td>
            </tr>
        )
    }
}