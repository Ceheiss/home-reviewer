import { shallow } from "enzyme";
import App from "./App";
import ReviewList from "../ReviewList/ReviewList";

it("shows the Review List component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(ReviewList).length).toEqual(1);
});
