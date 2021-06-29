import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../../actions";
import { Review } from "../Review/Review";

export const ReviewList = ({ reviews, fetchReviews }) => {
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.map((review, i) => {
        return <div key={i}>{review.headline}</div>;
      })}
      <Review />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { reviews: state.reviews };
};

export default connect(mapStateToProps, { fetchReviews })(ReviewList);
