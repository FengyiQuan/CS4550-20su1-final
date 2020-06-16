import {connect} from "react-redux";
import {findReviewsForJob} from "../services/ReviewService";
import ReviewListComponent from "../components/ReviewListComponet";

// +----------+-----------------------------------------------------+--+
// |   Role   |                         View                        |  |
// +----------+-----------------------------------------------------+--+
// | Admin    | Can see and edit all review                         |  |
// | Visitor  | read-only                                           |  |
// | Employee | Can see all review, only edit review by themselves  |  |
// +----------+-----------------------------------------------------+--+

const stateToPropertyMapper = (state, ownProps) => ({
    reviews: state.ReviewReducer.reviews
})

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findReviewForJob: (jobId) => {
            findReviewsForJob(jobId)
                .then(reviewsForJob => dispatch({
                                                    type: 'FIND_REVIEWS_FOR_JOB',
                                                    actualReviews: reviewsForJob
                                                }))
        }
    }
}
const ReviewListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ReviewListComponent);
export default ReviewListContainer;