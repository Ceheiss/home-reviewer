import "./App.css";
import ReviewList from "../ReviewList/ReviewList";
import { PageBackground } from "../PageBackground/PageBackground";

const App = () => {
  return (
    <div>
      <PageBackground />
      <ReviewList />
    </div>
  );
};

export default App;
