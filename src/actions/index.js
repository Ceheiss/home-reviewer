import { bookiplyReviews } from "../apis/bookiplyReviews";

export const fetchReviews = () => async (dispatch) => {
  const response = await bookiplyReviews.get("/reviews");

  dispatch({ type: "FETCH_REVIEWS", payload: response.data });
};

export const fetchPageReviews = (pageNumber) => async (dispatch) => {
  const response = await bookiplyReviews.get(
    `reviews?_page=${pageNumber}&_limit=5`
  );
  dispatch({ type: "FETCH_PAGE_REVIEWS", payload: response.data });
};
