import { bookiplyReviews } from "../apis/bookiplyReviews";

export const fetchReviews = () => async (dispatch) => {
  const response = await bookiplyReviews.get("/reviews");

  dispatch({ type: "FETCH_TOTAL_REVIEWS", payload: response.data });
};

export const fetchPageReviews = (pageNumber) => async (dispatch) => {
  const response = await bookiplyReviews.get(
    `reviews?_page=${pageNumber}&_limit=5`
  );
  dispatch({ type: "FETCH_PAGE_REVIEWS", payload: response.data });
};

export const setCurrentPage = (currentPage) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: currentPage,
  };
};

// &channel=HOLIDU --> filter by channel
// &_sort=score&_order=asc --> sort by score (asc or desc)

/*
  Channel I need to filter in the fetchReviews action because it is needed to build the pagination.
  sorting by score in the fetchPageReviews because I want to sort what is shown

  or

  I call a different action with url and call the action on the selection. I will handle them in the same reducer
*/
