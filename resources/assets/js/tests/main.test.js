import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "./testUtils";
import Main from "../components/Main";

/**
 * @funtion setup
 * @param {object} state - State for this setup
 * @return {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state);
  return shallow(<Main store={store} />).dive();
};

test("render without errors", () => {
  const wrapper = setup();

  expect(wrapper).toBeTruthy();
});

describe("redux proerties", () => {
  test('has access to "success" state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });
  test(`has access to 'secretWord' state`, () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
  });
  test(`has access to 'guessedWords' state`, () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test(`'getSecretWord' action creator is a function on the props`, () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
