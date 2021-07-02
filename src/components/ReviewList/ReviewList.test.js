import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import { ReviewList } from "./ReviewList";
import { Review } from "../Review/Review";

it("shows the Review List component", async () => {
  wrapper = mount(<ReviewList />);
  await wrapper.instance();
  expect(wrapper.find(Review).length).toEqual(1);
  wrapper.unmount();
});
