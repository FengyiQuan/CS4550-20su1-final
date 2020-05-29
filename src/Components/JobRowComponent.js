import React from "react";
import { Link } from "react-router-dom";

export default class CourseRowComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            job: {
                "salary_is_predicted": "1",
                "description": " Bike Courier   Get a taste of freedom on the road with the UK's largest food delivery network.   Become a self-employed Bike Courier and discover a feast of flexible opportunities at Just Eat.   Whether you're a student trying to make some extra cash, or have a bicycle and are looking to get on the road, this is a great opportunity for you to boost your income (and work on your calf muscles too). You can work weekdays or weekends, daytime or evenings, a full schedule or bits here and there - t\u2026",
                "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiWEVFa29pS2g2aEdrYXV3VDM3TV9UZyIsImkiOiIxMTk5MDc5NTcxIn0.qg_tl0DG11d-Ymuled_TqKFurrUcpbpAZ96HI3xcf_E",
                "salary_min": 24565.21,
                "latitude": 51.270302,
                "location":
                {
                    "__CLASS__":
                        "Adzuna::API::Response::Location",
                    "display_name":
                        "Maidstone, Kent",
                    "area":
                        ["UK", "South East England", "Kent", "Maidstone"]
                }
                ,
                "salary_max":
                    24565.21,
                "__CLASS__":
                    "Adzuna::API::Response::Job",
                "company":
                {
                    "display_name": "Just Eat",
                    "__CLASS__": "Adzuna::API::Response::Company"
                }
                ,
                "title":
                    "Bike Courier",
                "contract_type":
                    "contract",
                "id":
                    "1199079571",
                "contract_time":
                    "part_time",
                "longitude":
                    0.523841,
                "redirect_url":
                    "https://www.adzuna.co.uk/jobs/land/ad/1199079571?se=XEEkoiKh6hGkauwT37M_Tg&utm_medium=api&utm_source=28179437&v=F064F35DBF936B6FE6D9EE7FB01F4EC8C3C9EAC1",
                "created":
                    "2019-07-04T10:36:07Z",
                "category":
                {
                    "__CLASS__":
                        "Adzuna::API::Response::Category", "tag":
                        "other-general-jobs", "label":
                        "Other/General Jobs"
                }
                // this.props.job
            }
        }
    };


    render() {
        return (
            <tr className={'table-primary'}>
                <td className="d-none d-sm-table-cell">{this.state.job.title}</td>
                <td className="d-none d-md-table-cell">{this.state.job.company.display_name}</td>
                <td className="d-none d-lg-table-cell">{this.state.job.location.display_name}</td>

                <button className="btn btn-success"
                    onClick={this.ok}>
                    <i class="fa fa-angle-double-right" /> </button>
            </tr>
        )
    }
}