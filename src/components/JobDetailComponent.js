import React from "react";
import service from "../adzuna/AdzunaAPIService";

export default class JobDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            job: {}
        }

    }

    componentDidMount() {

        service.getInstance().searchJobs(this.props.match.params.id)
            .then(json => this.setState({job: json.results[0]}));

    };

    render() {
        const com_name = this.state.job.company;
        var self = this;
        // console.log(this.state)
        // console.log(com_name)
        // console.log(self.state.job.location.display_name)
        // console.log(com_name['display_name'])
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">
                        {this.state.job.title}
                    </h1>
                    <h2 className="lead form-group row">
                        <span className="col-sm-6">
                            <i className="fa fa-building pr-3"/>
                            {/*{this.state.job.company.display_name}*/}
                        </span>
                        <span className="col-sm-6">
                            <i className="fa fa-map-marker pr-3"/>
                            {/*{this.state.job.location.display_name}*/}
                        </span>
                    </h2>
                    <p>It uses utility classes for typography and spacing to space content out
                        within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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
                    {/*<span className="col-sm-8">*/}
                    {/*    {this.state.job.category.label}*/}
                    {/*</span>*/}
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
        )
    }

}