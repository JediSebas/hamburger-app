import React from "react";
import { shallow } from "enzyme";
import Contact from ".";
import Adapter from '../setupTest';

it("renders without crashing", () => {
  shallow(<Contact />);
});

it("renders About header", () => {
  const wrapper = shallow(<Contact />);
  const welcome = <h1>Contact</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});