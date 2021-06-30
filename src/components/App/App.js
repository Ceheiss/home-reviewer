import "./App.css";
import ReviewList from "../ReviewList/ReviewList";

const App = () => {
  return (
    <div>
      <div
        className="image-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
            process.env.PUBLIC_URL + "/assets/background.png"
          })`,
        }}
      ></div>
      <div className="review-container">
        <ReviewList />
      </div>
    </div>
  );
};

export default App;
