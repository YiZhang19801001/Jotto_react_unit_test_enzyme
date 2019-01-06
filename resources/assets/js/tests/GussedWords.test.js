import React from "react";
import { shallow } from "enzyme";
import { findTestByArrt, checkProp, checkNotProp } from "./testUtils";

import GuessedWords from "../components/GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
/**
 * Factory function to create a shallow wrapper of GuessedWords component
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProp(GuessedWords, defaultProps);
});

test("does throw warning with unexpected props string as guessedWords", () => {
  checkNotProp(GuessedWords, { guessedWords: "hello" });
});

test("does throw warning with unexpected props miss guessedWord", () => {
  checkNotProp(GuessedWords, { guessedWords: [{ letterMatchCount: 3 }] });
});

test("does throw warning with unexpected props guessedWord is null", () => {
  checkNotProp(GuessedWords, {
    guessedWords: [{ guessedWord: null, letterMatchCount: 3 }]
  });
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findTestByArrt(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findTestByArrt(wrapper, "guessed-instructions");

    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without errors", () => {
    const component = findTestByArrt(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test(`renders "guess words" section`, () => {
    const gussedWordsNode = findTestByArrt(wrapper, "guessed-words");
    expect(gussedWordsNode.length).toBe(1);
  });
  test("correct number of guessed words", () => {
    const gussedWordsNodes = findTestByArrt(wrapper, "guessed-word");
    expect(gussedWordsNodes.length).toBe(guessedWords.length);
  });
});
