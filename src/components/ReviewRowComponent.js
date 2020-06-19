import React from "react";
import {Link} from "react-router-dom";
import {deleteReview, updateReview} from "../services/ReviewService"

export default class ReviewRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: this.props.review.text
        }
    }

    render() {
        // console.log(this.props.role)
        return (<div className="pl-area pl-show-box">
            <div className="pl-area-userpic">
                <img className="pl-userpic"
                     src="https://ae01.alicdn.com/kf/H596671506b9243b7abf3d7c95edda908B.png"
                     alt={'review'}/>
            </div>
            <div className="pl-area-post">
                <div className="pl-show-title">
                    <Link className={'review-username'}
                          to={`/profile/${this.props.review.username}`}>
                        {this.props.review.username}
                    </Link>
                </div>
                {!this.state.editing && <div className="pl-show-saytext">
                    {this.props.review.text}
                </div>}
                {this.state.editing && <textarea value={this.state.text}
                                                 onChange={(e) => this.setState(
                                                     {text: e.target.value})}
                                                 className={'form-control'}/>}

                <div className="pl-show-tools">
                    {(this.props.role === 'ADMIN' ||
                      this.props.review.username === this.props.currentUser) &&
                     <span>
                    {!this.state.editing &&
                     <span>
                        <button className='btn'
                                onClick={() => this.setState({editing: true})}>
                        <i className="fa fa-pencil"/>
                        <span/>
                        </button>
                        <button className='btn'
                                onClick={() => this.props.deleteReviewById(
                                    this.props.review.reviewId)}>
                        <i className="fa fa-trash"/>
                        <span/>
                        </button>
                        </span>}


                         {this.state.editing &&

                          <button className='btn'
                                  onClick={() => {
                                      this.props.updateReview(this.props.review.reviewId, {
                                          reviewId: this.props.review.reviewId,
                                          text: this.state.text,
                                          jobId: this.props.review.jobId,
                                          username: this.props.review.username
                                      }).then(() => this.setState({editing: false}))
                                  }}>
                              <i className="fa fa-check"/>
                              <span/>
                          </button>
                         }
                </span>
                    }
                    <a className="pl-reply">Reply</a>
                </div>
            </div>
            <div className="pl-clr"/>
        </div>)

    }
}