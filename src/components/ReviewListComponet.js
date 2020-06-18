import React from 'react';
import {getCurrentUser} from "../services/ProfileService"
import ReviewRowComponent from "./ReviewRowComponent";
import {deleteReview} from "../services/ReviewService";

export default class ReviewListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            username: '',
            text: '',
            role: 'VISITOR',
            reviews: []
        }
    }

    componentDidMount() {
        getCurrentUser().then((user) => {
            if (user) {
                this.setState({
                                  username: user.username,
                                  role: user.role
                              })
            } else {
                this.props.history.push("/")
            }
        });
        this.props.findReviewForJob(this.props.params.id)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.equal(prevProps.reviews, this.props.reviews)) {
            // console.log(prevProps.reviews);
            // console.log(this.props.reviews);
            this.props.findReviewForJob(this.props.params.id)
        }
    }

    equal = (a, b) => {
        if (a.length !== b.length) {
            return false
        } else {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false
                }
            }
            return true;
        }
    }

    deleteReviewById = (rid) =>
        deleteReview(rid)
            .then(status => this.setState(prevState => ({
                reviews: prevState
                    .reviews.filter(
                        r => r.reviewId !== rid)
            })))

    render() {
        // console.log(this.props.reviews)
        // console.log(this.state)
        return (<div>
                <div>
                    <h2>REVIEWS</h2>
                    <button className="btn btn-warning btn-lg"
                            role="button"
                            onClick={() => this.setState({editing: true})}>
                        Write Review
                    </button>
                    {this.state.editing &&
                     <div className="pl-area">
                         <div className="pl-area-userpic">
                             <img className="pl-userpic"
                                  src="https://ae01.alicdn.com/kf/H596671506b9243b7abf3d7c95edda908B.png"
                                  alt={'review'}/>
                         </div>
                         <div className="pl-area-post">
                             <div className="pl-post">
                                 <div className="pl-textarea">
                                    <textarea className="pl-post-word"
                                              placeholder="Write your review!! "
                                              value={this.state.text}
                                              onChange={(e) => this.setState(
                                                  {text: e.target.value})}/>
                                 </div>
                                 <div className="pl-tools">
                                     <ul>
                                         <li>
                                             <span className="pl-icon icon-face"/>
                                         </li>
                                         <li>
                                             <span className="pl-icon icon-img"/>
                                         </li>
                                         <li className="pl-tools-lastchild">
                                             <button className="pl-submit-btn"
                                                     id="pl-submit-btn-main"
                                                     onClick={() => {
                                                         this.props.createReview(
                                                             this.props.params.id,
                                                             this.state.username, {
                                                                 jobId: this.props.params.id,
                                                                 username: this.state.username,
                                                                 text: this.state.text
                                                             });
                                                         this.setState(
                                                             {
                                                                 reviews: [...this.state.reviews,
                                                                     {
                                                                         jobId: this.props.params.id,
                                                                         username: this.state.username,
                                                                         text: this.state.text
                                                                     }],
                                                                 editing: false,
                                                                 text: ''
                                                             })
                                                     }}>
                                                 Submit
                                             </button>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                    }

                    <div className="pl-clr" id="pl-start"/>
                    <div className="pl-title">New Review</div>
                    {this.props.reviews.map(
                        review => <ReviewRowComponent review={review}
                                                      key={`review${review.reviewId}`}
                                                      currentUser={this.state.username}
                                                      role={this.state.role}
                                                      deleteReviewById={this.deleteReviewById}/>)}
                </div>
            </div>
        )
    }
}
