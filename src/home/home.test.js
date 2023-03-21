import React from "react";
import { shallow } from "enzyme";
import Home from ".";
import Adapter from '../setupTest';

it("renders without crashing", () => {
  shallow(<Home />);
});

it("renders Home header", () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Home</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});