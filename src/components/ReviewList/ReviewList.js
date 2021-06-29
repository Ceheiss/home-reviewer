import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../../actions";
import { Review } from "../Review/Review";

export const ReviewList = ({ reviews, fetchReviews }) => {
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="review-list">
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { reviews: state.reviews };
};

export default connect(mapStateToProps, { fetchReviews })(ReviewList);
