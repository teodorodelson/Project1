import React from "react";
import { shallow, mount } from "enzyme";
import Login from "./Login";

it("This is to test Login page", () => {
  const wrapper = mount(<Login />);
  const button = wrapper.find("#test_username");
  const result = button.text();
  expect(result).toBe("Username");
});

it("This is to test Login page", () => {
  const wrapper = shallow(<Login />);
  const button = wrapper.find("#password");
  const result = button.text();
  expect(result).toBe("Password");
});

it("This is to test Login page", () => {
  const wrapper = shallow(<Login />);
  const button = wrapper.find("button");

  expect(button.exists()).toBe(true);
});

it("This is to test Login page", () => {
  const wrapper = shallow(<Login />);
  const username = wrapper.state().user_email;
  const password = wrapper.state().user_password;

  expect(username).toEqual("");
  expect(password).toEqual("");
});

it("This is to test Login page", () => {
  const wrapper = shallow(<Login />);
  const username = wrapper.state().user_email;
  const password = wrapper.state().user_password;
  const button = wrapper.find("button");

  button.simulate("click");

  expect(username).toEqual("");
  expect(password).toEqual("");
});
