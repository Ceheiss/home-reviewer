import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../../actions";
import { Review } from "../Review/Review";
import "./ReviewList.css";

export const ReviewList = ({ reviews, fetchReviews }) => {
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="review-list">
      <h2 className="reviews-title">{reviews.length} Reviews</h2>
      {reviews.map((review, i) => (
        <Review key={(Math.random() * i).toString(16)} review={review} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { reviews: state.reviews };
};

export default connect(mapStateToProps, { fetchReviews })(ReviewList);
