import React from "react";
import { shallow } from "enzyme";

import { findTestByArrt, storeFactory } from "./testUtils";
import Input from "../components/Input";

/**
 * Factory function to create a ShallowWrapper for the Input componet
 * @function setup
 * @param {object} initialState - initial state will pass to redux
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive();
};

setup();

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  describe("word has not been guessed", () => {
    test("renders component without error", () => {
      const component = findTestByArrt(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findTestByArrt(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findTestByArrt(wrapper, "input-submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    test("renders component without error", () => {});
    test("does not renders input box", () => {});
    test("does not renders submit button", () => {});
  });
});
describe("update state", () => {});
