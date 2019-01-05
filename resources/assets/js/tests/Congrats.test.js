import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import findByTestArrt from "./testUtils";

import Congrats from "../components/Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for Congratss component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<Congrats {...props} />);

  return wrapper;
};

test("render without errors", () => {
  const wrapper = setup();
  const component = findByTestArrt(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when 'success' prop is false", () => {
  const wrapper = setup({ sucess: false });
  const component = findByTestArrt(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestArrt(wrapper, "congrats-message");
  console.log(wrapper.debug());
  expect(message.text()).not.toBe("");
});
