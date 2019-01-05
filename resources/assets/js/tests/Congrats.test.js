import React from "react";
import { shallow } from "enzyme";

import { findTestByArrt, checkProp } from "./testUtils";

import Congrats from "../components/Congrats";

const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for Congratss component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);

  return wrapper;
};

test("render without errors", () => {
  const wrapper = setup();
  const component = findTestByArrt(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when 'success' prop is false", () => {
  const wrapper = setup();
  const component = findTestByArrt(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findTestByArrt(wrapper, "congrats-message");

  expect(message.text()).not.toBe("");
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProp(Congrats, expectedProps);
});
