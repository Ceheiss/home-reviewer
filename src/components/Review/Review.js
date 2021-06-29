import "./Review.css";

export const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="top-section">
        <div className="score">
          <span>{review.score}/5</span>
        </div>
        <div className="channel">{review.channel}</div>
      </div>
      <div className="headline">{review.headline}</div>
      <div className="comment">{review.comment}</div>
      {review.positiveFeedback ? (
        <div className="positive-feedback">
          <div>Logo</div>
          <div>{review.positiveFeedback}</div>
        </div>
      ) : null}
      {review.negativeFeedback ? (
        <div className="negative-feedback">
          <div>Logo</div>
          <div>{review.negativeFeedback}</div>
        </div>
      ) : null}
      <div className="author">{review.author}</div>
      <div className="date">{review.publishedAt}</div>
      <br />
      <hr />
    </div>
  );
};
