import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../reducers";
/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @returns {Store} - redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Find html elements by data-test atrribute
 * @function findTestByArrt
 * @param {*} wrapper
 * @param {*} val
 * @returns {JSX.Element}
 */
export const findTestByArrt = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProp = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

export const checkNotProp = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).not.toBeUndefined();
};
