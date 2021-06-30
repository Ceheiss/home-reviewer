import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchReviews, fetchPageReviews } from "../../actions";
import "./Pagination.css";

export const ReviewList = ({
  currentReviews,
  totalReviews,
  fetchReviews,
  fetchPageReviews,
}) => {
  useEffect(() => {
    fetchReviews();
    fetchPageReviews(1);
  }, []);

  const pages = [];

  for (let i = 0; i < Math.ceil(totalReviews.length / 5); i++) {
    pages.push(i + 1);
  }

  return (
    <div className="pagination">
      {pages.map((page, i) => (
        <button key={Math.random() * i} onClick={() => fetchPageReviews(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("STATEEEE:", state);
  console.log("STATEEEE REVIEWS:", state.reviews);
  return {
    totalReviews: state.totalReviews,
    currentReviews: state.currentReviews,
  };
};

export default connect(mapStateToProps, { fetchReviews, fetchPageReviews })(
  ReviewList
);
