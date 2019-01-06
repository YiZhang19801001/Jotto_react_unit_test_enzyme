import React from "react";
import { shallow } from "enzyme";

import { findTestByArrt, storeFactory } from "./testUtils";
import Input, { UnconnectedInput } from "../components/Input";

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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findTestByArrt(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not renders input box", () => {
      const inputBox = findTestByArrt(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not renders submit button", () => {
      const submitButton = findTestByArrt(wrapper, "input-submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});
describe("redux props", () => {
  test("has sucess piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test(`'guessWord' action creator is a function prop`, () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe(`'guessWord' action creator call`, () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = { guessWord: guessWordMock };

    // set up component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />);

    // add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord };

    // simulate clicked
    const submitButton = findTestByArrt(wrapper, "input-submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });
  test(`calls 'guessWord' when button is clicked`, () => {
    // check for see if mock ran
    const guessWordCallCount = guessWordMock.mock.calls.length;

    expect(guessWordCallCount).toBe(1);
  });

  test(`calls 'guessWord' method should with input value as argument`, () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];

    expect(guessWordArg).toBe(guessedWord);
  });
  test(`clear input after submit button been clicked`, () => {
    expect(wrapper.instance().inputBox.current.value).toBe("");
  });
});
