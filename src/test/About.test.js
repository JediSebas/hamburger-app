import React from "react";
import { shallow } from "enzyme";
import About from "../About";
import Adapter from './setupTest';

it("renders without crashing", () => {
  shallow(<About />);
});

it("renders About header", () => {
  const wrapper = shallow(<About />);
  const welcome = <h1>About</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});