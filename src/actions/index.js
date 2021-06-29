import { bookiplyReviews } from "../apis/bookiplyReviews";

console.log("bookiply", bookiplyReviews);

export const fetchReviews = () => async (dispatch) => {
  const response = await bookiplyReviews.get("/reviews");

  dispatch({ type: "FETCH_REVIEWS", payload: response.data });
};
