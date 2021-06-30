import { combineReducers } from "redux";

export const totalReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REVIEWS":
      const totalReviews = action.payload;
      return totalReviews;
    default:
      return state;
  }
};

export const currentReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PAGE_REVIEWS":
      const currentReviews = action.payload;
      return currentReviews;
    default:
      return state;
  }
};

export default combineReducers({
  totalReviews: totalReviewsReducer,
  currentReviews: currentReviewsReducer,
});
