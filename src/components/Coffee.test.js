import React from "react";
import { shallow, mount } from "enzyme";
import Coffee from "./Coffee";

it("This is to test coffee page state when first rendered", () => {
  const wrapper = shallow(<Coffee />);
  const coffee_id = wrapper.state().coffees;
  // const password = wrapper.state().user_password;
  //   console.log(coffee_id);
  expect(coffee_id).toEqual([]);
  // expect(password).toEqual("");
});

it("This test counts how many table headers is present", () => {
  const wrapper = shallow(<Coffee />);
  expect(wrapper.find("th").length).toEqual(6);
});

it("This test counts how many table headers is present", () => {
  const wrapper = shallow(<Coffee />);
  expect(wrapper.find("td").length).toEqual(0);
});
