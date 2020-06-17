import React from "react";
import JobRowComponent from './JobRowComponent';

export default class JobTableComponent
    extends React.Component {

    render() {
        return (
            <div>
                {this.props.jobs.length !== 0 &&
                 <table className="table table-striped">
                     <thead>
                     <tr>
                         <th>Title</th>
                         <th className="d-none d-sm-table-cell">
                             Company
                         </th>
                         <th className="d-none d-md-table-cell">
                             Location
                         </th>
                         <th>
                             <div className="btn-group">
                                 <button className="btn"
                                         onClick={() => this.props.setLayout('grid')}>
                                     <i className="fa fa-th pr-2"/>
                                 </button>
                                 <button className="btn">
                                     <i className="fa fa-sort"/>
                                 </button>
                             </div>
                         </th>
                     </tr>
                     </thead>
                     <tbody>

                     {
                         this.props.jobs.map(job => <JobRowComponent job={job} key={job.id}
                                                                     type={this.props.type}/>)
                     }

                     </tbody>
                 </table>
                }
            </div>
        )

    }
}
