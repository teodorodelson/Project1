import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

it("This test is to ensure that I have controled list on my NavBar", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find("li").length).toEqual(5);
});
