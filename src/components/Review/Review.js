import "./Review.css";

const options = { year: "numeric", month: "long", day: "numeric" };

export const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="top-section">
        <div className="score">
          <span>{review.score}</span>/5
        </div>
        <img
          className="channel"
          alt={`${review.channel} logo`}
          src={`${process.env.PUBLIC_URL}/assets/${review.channel}.svg`}
        />
      </div>
      <div className="headline">{review.headline}</div>
      <div className="comment">{review.comment}</div>
      {review.positiveFeedback ? (
        <div className="feedback">
          <img
            alt="thumbs down image"
            src={`${process.env.PUBLIC_URL}/assets/thumb-up.svg`}
          />
          <div>{review.positiveFeedback}</div>
        </div>
      ) : null}
      {review.negativeFeedback ? (
        <div className="feedback">
          <img
            alt="thumbs down image"
            src={`${process.env.PUBLIC_URL}/assets/thumb-down.svg`}
          />
          <div>{review.negativeFeedback}</div>
        </div>
      ) : null}
      <div className="bottom-section">
        <div className="author">{review.author}</div>
        <div className="date">
          Reviewed{" "}
          {new Date(review.publishedAt).toLocaleDateString("en-UK", options)}
        </div>
      </div>
      <hr className="separation" />
    </div>
  );
};
