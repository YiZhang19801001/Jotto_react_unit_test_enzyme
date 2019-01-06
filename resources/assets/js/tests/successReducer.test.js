import { actionTypes } from "../actions";

import successReducer from "../reducers/successReducer";

test(`return initial state of 'false' when no aciton is passed`, () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test(`return state of 'true' upon receiving an action of type 'CORRECT_GUESS'`, () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
