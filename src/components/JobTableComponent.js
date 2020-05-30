import React from "react";
import JobRowComponent from './JobRowComponent';
import service from '../adzuna/AdzunaAPIService'
import NoResultFoundComponent from "./NoResultFoundComponent";

export default class JobTableComponent
    extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (<div>
                {
                    this.props.jobs.length === 0 && <NoResultFoundComponent/>
                }
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
                             <button className="btn"><i className="fa fa-sort"/></button>
                         </th>
                     </tr>
                     </thead>
                     <tbody>

                     {this.props.jobs.map(job => <JobRowComponent job={job}
                                                                  key={job.id}/>)
                     }

                     </tbody>
                 </table>
                }
            </div>
        )

    }
}
