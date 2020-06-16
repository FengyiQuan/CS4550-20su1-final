const initialState = {
  reviews: []
}

const ReviewReducer = (state = initialState, action) => {
  switch(action.type) {
    case "DELETE_REVIEW":
      return {
        reviews: state.reviews.filter(review => review.reviewId !== review.reviewId)
      };
    case "FIND_REVIEWS_FOR_JOB":
      return {
        ...state,
        reviews: action.actualReviews
      };
    case "CREATE_REVIEW":
      return {
        reviews: [...state.reviews,
          action.newReview]
      };
    case "FIND_REVIEW":
      return {
        ...state,
        reviews: action.reviews
      };
    case "UPDATE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.map(
            review => review.reviewId === action.updatedReview._id ?
                action.updatedReview : review)
      };
    default:
      return state
  }
};

export default ReviewReducer;