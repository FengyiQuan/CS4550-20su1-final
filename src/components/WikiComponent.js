import React from 'react';
import {Link} from "react-router-dom";

export default class WikiComponent
    extends React.Component {

    state = {
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
        }
    };

    render() {
        return (
            <div>
                <h1>wiki</h1>
                <Link to={'/'}>Back</Link>
                <ul>
                    <li>
                        <a href="https://developer.adzuna.com/docs/search">Azuna</a>
                        <ul>
                            <li>job search api based on job keyword and location</li>
                        </ul>
                    </li>
                    <li>Search criteria
                        <ul>
                            <li>for now just type keyword for desired job position</li>
                            <li>the keyword also supports the location when it is provided in
                                searchbar
                            </li>
                        </ul>
                    </li>
                    <li>example query:
                        <ul>
                            <li>
                                <p>keyword: software</p>
                                <ul>
                                    <li>would query jobs on software and json containes raw data,
                                        then it is parsed
                                    </li>
                                </ul>

                                <ul>
                                    <li>keyword: England, a subset of a returned json would be
                                        "area": [
                                        "UK",
                                        "North East England"
                                        ]
                                    </li>
                                </ul>

                                <ul>
                                    <li>the summary result would be a list of brief information:
                                        company, title, and location
                                    </li>
                                    <li>the detailed page would provide additional information like
                                        salary, description with url of /_id
                                        example: <Link to='/detail/1533798912'>Example Detailed
                                            page</Link>
                                    </li>
                                    <li> One example here is the keyword search for software to make
                                        a brief joblist is:
                                        <Link to='/table/jobs?keyword=software'>Example Job
                                            list</Link>
                                    </li>

                                    <li>a detailed page example would rendered as following</li>
                                    <div>
                                        <div className="jumbotron">
                                            <h1 className="display-4">
                                                {this.state.job.title}
                                            </h1>
                                            <h2 className="lead form-group row">
                                                <span className="col-sm-6">
                                                    <i className="fa fa-building pr-3"/>
                                                    {this.state.job.company.display_name}
                                                </span>
                                                <span className="col-sm-6">
                                                    <i className="fa fa-map-marker pr-3"/>
                                                    {this.state.job.location.display_name}
                                                </span>
                                            </h2>
                                            <p>It uses utility classes for typography and spacing to
                                                space content out
                                                within the larger container.</p>
                                            <a className="btn btn-primary btn-lg" href="#"
                                               role="button">Learn more</a>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">Title</span>
                                            <span className="col-sm-8">
                                                {this.state.job.title}
                                            </span>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">Description</span>
                                            <span className="col-sm-8">
                                                {this.state.job.description}
                                            </span>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">Salary</span>
                                            <span className="col-sm-8">
                                                {this.state.job.salary_min}{this.state.job.salary_max}
                                            </span>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">Contract time</span>
                                            <span className="col-sm-8">
                                                {this.state.job.contract_time}
                                            </span>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">Category</span>
                                            <span className="col-sm-8">
                                                {this.state.job.category.label}
                                            </span>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">Created by</span>
                                            <span className="col-sm-8">
                                                {this.state.job.created}
                                            </span>
                                        </div>
                                        <div className="form-group row">
                                            <span className="col-sm-4">ID</span>
                                            <span className="col-sm-8">
                                                {this.state.job.id}
                                            </span>
                                        </div>
                                    </div>

                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>


            </div>
        )
    }

}





