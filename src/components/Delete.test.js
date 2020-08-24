import React from "react";
import { shallow, mount } from "enzyme";
import Delete from "./Delete";

it("This is to test Create coffee page state when first rendered", () => {
  const wrapper = shallow(<Delete />);
  const coffee_id = wrapper.state().coffee_id;

  expect(coffee_id).toEqual("");
});

it("This test counts see to it that there are only 6 input fields", () => {
  const wrapper = shallow(<Delete />);
  expect(wrapper.find("input").length).toEqual(1);
});

it("This test ensures that there is only 1 button for the form", () => {
  const wrapper = shallow(<Delete />);
  expect(wrapper.find("button").length).toEqual(1);
});
