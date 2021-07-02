import { shallow } from "enzyme";
import { Spinner } from "./Spinner";

it("has two div elements", () => {
  const wrapped = shallow(<Spinner />);
  expect(wrapped.find("div").length).toEqual(2);
});
