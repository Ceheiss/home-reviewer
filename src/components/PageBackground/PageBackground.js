import "./PageBackground.css";
import ReviewList from "../ReviewList/ReviewList";

export const PageBackground = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
          process.env.PUBLIC_URL + "/assets/background.png"
        })`,
      }}
    >
      <ReviewList />
    </div>
  );
};
