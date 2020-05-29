import React from "react";
import {Link} from "react-router-dom";

export default class CourseRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: this.props.job
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.job.title}</td>
                <td className="d-none d-sm-table-cell">{this.state.job.company.display_name}</td>
                <td className="d-none d-md-table-cell">{this.state.job.location.display_name}</td>
                <td>
                    <button className="btn btn-primary"
                            onClick={this.ok}>
                        <i className="fa fa-angle-double-right"/>
                    </button>
                </td>
            </tr>
        )
    }
}