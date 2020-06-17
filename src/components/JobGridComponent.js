import React from "react";
import JobCardComponent from "./JobCardComponent";
import JobRowComponent from "./JobRowComponent";

export default class JobGridComponent
    extends React.Component {

    render() {
        return (<div>
                {this.props.jobs.length !== 0 &&
                 <div>
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
                                             onClick={() => this.props.setLayout('table')}>
                                         <i className="fa fa-th pr-2"/>
                                     </button>
                                     <button className="btn">
                                         <i className="fa fa-sort"/>
                                     </button>
                                 </div>
                             </th>
                         </tr>
                         </thead>
                     </table>
                     <div
                         className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                         {
                             this.props.jobs.map(job => <JobCardComponent job={job} key={job.id}
                                                                          type={this.props.type}/>)
                         }

                     </div>
                 </div>
                }
            </div>

        )
    }
}