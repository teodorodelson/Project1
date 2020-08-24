import React from "react";
import { shallow, mount } from "enzyme";
import Createcoffee from "./Createcofee";

it("This is to test Create coffee page state when first rendered", () => {
  const wrapper = shallow(<Createcoffee />);
  const coffee_name = wrapper.state().coffee_name;
  const container = wrapper.state().container;
  const shots_of_espresso = wrapper.state().shots_of_espresso;
  const total_calories = wrapper.state().total_calories;
  const contains_milk = wrapper.state().contains_milk;
  const price = wrapper.state().price;

  expect(coffee_name).toEqual("");
  expect(container).toEqual("");
  expect(shots_of_espresso).toEqual("");
  expect(total_calories).toEqual("");
  expect(contains_milk).toEqual("");
  expect(price).toEqual("");
});

it("This test counts see to it that there are only 6 input fields", () => {
  const wrapper = shallow(<Createcoffee />);
  expect(wrapper.find("input").length).toEqual(6);
});

it("This test ensures that there is only 1 button for the form", () => {
  const wrapper = shallow(<Createcoffee />);
  expect(wrapper.find("button").length).toEqual(1);
});
