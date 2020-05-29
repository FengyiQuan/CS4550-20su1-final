import React from "react";
import service from "../adzuna/AdzunaAPIService";
import JobTableComponent from "../Components/JobTableComponent";

export default class JobListContainer
    extends React.Component {
    state = {
        layout: "table",
        // this.props.match.params.layout,
        page: 1,
        jobs: [],
        newCourseTitle: 'New Title'
    };

    componentDidMount() {
        service.getInstance().searchJobs(this.props.match.params.keyword)
            .then(json => this.setState({jobs: json.results}));
    };

    // getSearchResult = () =>{
    //
    //     console.log(service.getInstance().searchMovie("").then(json => this.setState({jobs:
    // json}))) return service.getInstance().searchMovie("").then(json => this.setState({jobs:
    // json})); }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.match.params.layout !== this.props.match.params.layout) {
    //         this.setState({
    //                           layout: this.props.match.params.layout
    //                       })
    //     }
    // };

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/jobs`)
    };

    // deleteCourse = (courseToDelete) =>
    //     courseService.deleteCourse(courseToDelete._id)
    //         .then(status => this.setState(prevState => ({
    //             courses: prevState
    //                 .courses.filter(course => course !== courseToDelete)
    //         })));

    // addCourse = (title) =>
    //     courseService.createCourse({
    //                                    title: title,
    //                                    owner: 'me',
    //                                    modified: (new Date()).toDateString()
    //                                })
    //         .then(theActualNewCourse =>
    //                   this.setState((prevState) => {
    //                       return {
    //                           courses: [
    //                               ...prevState.courses,
    //                               theActualNewCourse
    //                           ]
    //                       }
    //                   }));

    render() {
        return (
            <div>
                {
                    this.state.layout === 'table' &&
                    <JobTableComponent
                        jobs={this.state.jobs}
                        setLayout={this.setLayout}
                    />
                }
                {/*{*/}
                {/*    this.state.layout === 'grid' &&*/}
                {/*    <CourseGridComponent setLayout={this.setLayout}*/}
                {/*                         deleteCourse={this.deleteCourse}*/}
                {/*                         courses={this.state.courses}/>*/}
                {/*}*/}
            </div>
        );
    }
}