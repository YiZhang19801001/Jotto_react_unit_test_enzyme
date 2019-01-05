import checkPropTypes from "check-prop-types";

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

export const checkProp = function(component, conformingProps) {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};
