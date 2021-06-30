import { connect } from "react-redux";
import { Review } from "../Review/Review";
import { Spinner } from "../Spinner/Spinner";
import "./ReviewList.css";

export const ReviewList = ({ totalReviews, currentReviews }) => {
  return (
    <div className="review-list-container">
      {totalReviews.length > 0 ? (
        <>
          <section className="house-details">
            <p>ID: 091021</p>
            <h1>La Casa de las Flores</h1>
          </section>
          <div className="review-list">
            <h2 className="reviews-title">{totalReviews.length} Reviews</h2>
            {currentReviews.map((review, i) => (
              <Review key={(Math.random() * i).toString(16)} review={review} />
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalReviews: state.totalReviews,
    currentReviews: state.currentReviews,
  };
};
export default connect(mapStateToProps)(ReviewList);
