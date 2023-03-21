import React from "react";
import { shallow } from "enzyme";
import HamburgerMenu from ".";
import Adapter from '../setupTest';
import { Link } from "react-router-dom";

it("renders without crashing", () => {
  shallow(<HamburgerMenu />);
});

it("renders About header", () => {
  const wrapper = shallow(<HamburgerMenu />);
  const navList =  
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>;
  expect(wrapper.contains(navList)).toEqual(true);
});