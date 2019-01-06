import { correctGuess, actionTypes } from "../actions";

describe("correctGuess", () => {
  test(`returns an action with type 'CORRECT_GUESS'`, () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
