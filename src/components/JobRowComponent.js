import React from "react";
import {Link} from "react-router-dom";

export default class JobRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: this.props.job
        }
    }

    getUsername = () => {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                if (response.ok === false) {
                    this.props.history.push("/")
                } else {
                    return response.json().username
                }
            })
    }

    addToWishList = (jid) => {
        fetch("/api/profiles/{username}/wishLists", {
            method: 'POST',
            credentials: "include",
            body: {
                jid: jid
            }
        })
    }

    render() {

        // console.log(this.getUsername())
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
                             onClick={() => this.addToWishList(this.state.job.id)}>
                         <i className="fa fa-heart"/>
                     </button>}
                </td>
            </tr>
        )
    }
}