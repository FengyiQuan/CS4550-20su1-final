import React from "react";
import service from "../adzuna/AdzunaAPIService";
import JobTableComponent from "../components/JobTableComponent";
import NoResultFoundComponent from "../components/NoResultFoundComponent";
import JobGridComponent from "../components/JobGridComponent";
import {Link} from "react-router-dom";

export default class JobListContainer
    extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        page: 1,
        jobs: [],
        newCourseTitle: 'New Title',
        count: 1,
        type: 'visitor',
        username: ''
    };

    componentDidMount() {
        this.getSearchResult();
        fetch("https://cs4550-20su1-jobigger-server.herokuapp.com/api/profile", {
            method: 'GET',
            credentials: "include"
        })
            .then(response => {
                // if (response.ok === false) {
                //     this.props.history.push("/")
                // } else {
                    return response.json()
                // }
            }).catch(e=>{})
            .then(user => {
            // console.log(user)
            if (user) {
                this.setState({
                                  type: user.role,
                                  username: user.username
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
        // console.log(this.props)
        return (
            <div>
                {
                    this.state.count === 0 && <NoResultFoundComponent/>
                }
                {
                    this.state.layout === 'table' &&
                    <JobTableComponent jobs={this.state.jobs}
                                       type={this.state.type}
                                       setLayout={this.setLayout}
                                       username={this.state.username}/>
                }
                {
                    this.state.layout === 'grid' &&
                    <JobGridComponent jobs={this.state.jobs}
                                      type={this.state.type}
                                      setLayout={this.setLayout}
                                      username={this.state.username}/>
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
                <Link className='btn btn-primary'
                       to={`/`}>
                    Back
                </Link>
            </div>
        );
    }
}