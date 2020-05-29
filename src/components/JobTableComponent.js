import React from "react";
import JobRowComponent from './JobRowComponent';
import service from '../adzuna/AdzunaAPIService'
import NoResultFoundComponent from "./NoResultFoundComponent";

export default class JobTableComponent
    extends React.Component {

    constructor(props) {
        super(props);

        //     [{
        //     "location": {
        //         "display_name": "Halifax, West Yorkshire",
        //         "__CLASS__": "Adzuna::API::Response::Location",
        //         "area": ["UK", "Yorkshire And The Humber", "West Yorkshire", "Halifax"]
        //     },
        //     "salary_max": 21214.8,
        //     "__CLASS__": "Adzuna::API::Response::Job",
        //     "title": "Bike Courier",
        //     "company": {
        //         "__CLASS__": "Adzuna::API::Response::Company",
        //         "display_name": "Just Eat"
        //     },
        //     "adref":
        // "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMTE5OTA5NjM2NSIsInMiOiJodTFPdjRHaDZoR1FGa1FVMzdNX1RnIn0.X7-0D4c3NYMU1Yv2UoglJCdVI4rmOCoI97u6_ICpF6g",
        // "description": " Bike Courier   Get a taste of freedom on the road with the UK's largest
        // food delivery network.   Become a self-employed Bike Courier and discover a feast of
        // flexible opportunities at Just Eat.   Whether you're a student trying to make some extra
        // cash, or have a bicycle and are looking to get on the road, this is a great opportunity
        // for you to boost your income (and work on your calf muscles too). You can work weekdays
        // or weekends, daytime or evenings, a full schedule or bits here and there - t\u2026",
        // "salary_is_predicted": "1", "latitude": 53.7244, "salary_min": 21214.8, "redirect_url":
        // "https://www.adzuna.co.uk/jobs/land/ad/1199096365?se=hu1Ov4Gh6hGQFkQU37M_Tg&utm_medium=api&utm_source=28179437&v=1F9296598D9FAE821C0E272CCCD0F4FCA8B007F1",
        // "created": "2019-07-04T10:54:31Z", "category": { "__CLASS__":
        // "Adzuna::API::Response::Category", "tag": "other-general-jobs", "label": "Other/General Jobs" }, "contract_type": "contract", "contract_time": "part_time", "id": "1199096365", "longitude": -1.86158 }, { "contract_type": "contract", "contract_time": "part_time", "id": "1202225996", "longitude": 0.274965, "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/1202225996?se=hu1Ov4Gh6hGQFkQU37M_Tg&utm_medium=api&utm_source=28179437&v=41BCB94F03EA7CB943F7412846DAE752ADFA7173", "created": "2019-07-07T21:54:17Z", "category": { "label": "Other/General Jobs", "tag": "other-general-jobs", "__CLASS__": "Adzuna::API::Response::Category" }, "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiaHUxT3Y0R2g2aEdRRmtRVTM3TV9UZyIsImkiOiIxMjAyMjI1OTk2In0.I2chsBA8k6ASgZ_QliSS2N7fIMhLjrqmdjaNn9zaBRc", "description": " Bike Courier   Get a taste of freedom on the road with the UK's largest food delivery network.   Become a self-employed Bike Courier and discover a feast of flexible opportunities at Just Eat.   Whether you're a student trying to make some extra cash, or have a bicycle and are looking to get on the road, this is a great opportunity for you to boost your income (and work on your calf muscles too). You can work weekdays or weekends, daytime or evenings, a full schedule or bits here and there - t\u2026", "salary_is_predicted": "1", "salary_min": 30052, "latitude": 51.1959, "location": { "__CLASS__": "Adzuna::API::Response::Location", "display_name": "Tonbridge, Kent", "area": ["UK", "South East England", "Kent", "Tonbridge"] }, "salary_max": 30052, "__CLASS__": "Adzuna::API::Response::Job", "title": "Bike Courier", "company": { "display_name": "Just Eat", "__CLASS__": "Adzuna::API::Response::Company" } }, { "created": "2019-07-04T10:46:34Z", "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/1199089230?se=hu1Ov4Gh6hGQFkQU37M_Tg&utm_medium=api&utm_source=28179437&v=F2CDA57D2697D975CE2E6540F65696CCC051B610", "category": { "label": "Other/General Jobs", "tag": "other-general-jobs", "__CLASS__": "Adzuna::API::Response::Category" }, "contract_type": "contract", "contract_time": "part_time", "id": "1199089230", "longitude": -0.749466, "location": { "__CLASS__": "Adzuna::API::Response::Location", "display_name": "High Wycombe, Buckinghamshire", "area": ["UK", "South East England", "Buckinghamshire", "High Wycombe"] }, "salary_max": 25385.73, "__CLASS__": "Adzuna::API::Response::Job", "company": { "display_name": "Just Eat", "__CLASS__": "Adzuna::API::Response::Company" }  }]

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
