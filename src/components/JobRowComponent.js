import React from "react";
import {Link} from "react-router-dom";
import {createJob} from "../services/JobService"

import {addToWishList, removeFromWishList} from "../services/WishListService"

export default class JobRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: this.props.job,
        }
    }

    // addToWishList = (jid) => {
    //     fetch("/api/profiles/${username}/wishLists", {
    //         method: 'POST',
    //         credentials: "include",
    //         body: {
    //             jid: jid
    //         }
    //     })
    // }

    render() {

        // console.log(this.props.username)
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
                         // onClick={() => addToWishList(this.state.job.id, this.props.username)}>
                             onClick={() => {
                                 createJob(
                                 {jobId: this.state.job.id, jobName: this.state.job.title})}}>
                         <i className="fa fa-heart"/>
                     </button>}
                </td>
            </tr>
        )
    }
}