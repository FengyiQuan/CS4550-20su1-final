import React from "react";
import service from "../adzuna/AdzunaAPIService";
import JobTableComponent from "../components/JobTableComponent";
import NoResultFoundComponent from "../components/NoResultFoundComponent";
import JobGridComponent from "../components/JobGridComponent";

export default class JobListContainer
    extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        page: 1,
        jobs: [],
        newCourseTitle: 'New Title',
        count: 1
    };

    componentDidMount() {
        this.getSearchResult();
    };

    getSearchResult = () => {
        const query = this.props.location.search;
        const word = query.split('=').pop();
        service.getInstance().searchJobs(word, this.state.page)
            .then(json => this.setState({
                                            jobs: json.results,
                                            count: json.count
                                        }));
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                              layout: this.props.match.params.layout
                          })
        } else if (prevState.page !== this.state.page) {
            this.getSearchResult();
        }
    };

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/jobs${this.props.location.search}`)
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
                    this.state.count === 0 && <NoResultFoundComponent/>
                }
                {
                    this.state.layout === 'table' &&
                    <JobTableComponent
                        jobs={this.state.jobs}
                        setLayout={this.setLayout}
                    />
                }
                {
                    this.state.layout === 'grid' &&
                    <JobGridComponent jobs={this.state.jobs}
                                      setLayout={this.setLayout}
                    />
                }
                <button onClick={() => this.setState(
                    {page: this.state.page === 1 ? this.state.page : this.state.page - 1})}>
                    上一页
                </button>

                < button onClick={() => this.setState({page: this.state.page + 1})}>
                    下一页
                </button>

            </div>
        );
    }
}