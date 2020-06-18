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
        count: 1,
        type: 'visitor'
    };

    componentDidMount() {
        this.getSearchResult();
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                if (response.ok === false) {
                    this.props.history.push("/")
                } else {
                    return response.json()
                }
            }).then(user => {
            // console.log(user)
            if (user) {
                this.setState({
                                  type: user.role
                              })
            }
        })
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
                    <JobTableComponent jobs={this.state.jobs}
                                       type={this.state.type}
                                       setLayout={this.setLayout}/>
                }
                {
                    this.state.layout === 'grid' &&
                    <JobGridComponent jobs={this.state.jobs}
                                      type={this.state.type}
                                      setLayout={this.setLayout}/>
                }

                {this.state.count !== 0 &&
                 <div>
                     <div>Current: {this.state.page}</div>
                     {
                         this.state.page !== 1 &&
                         <button className='btn btn-success'
                                 onClick={() => this.setState(
                                     {
                                         page: this.state.page === 1 ? this.state.page
                                                                     : this.state.page - 1
                                     })}>
                             Previous Page
                         </button>
                     }
                     {
                         (this.state.count - (this.state.page * 10)) >= 10 &&
                         < button className='btn btn-success'
                             onClick={() => this.setState({page: this.state.page + 1})}>
                             Next Page
                         </button>
                     }
                 </div>
                }

            </div>
        );
    }
}