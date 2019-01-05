/**
 * Find html elements by data-test atrribute
 * @function findByTestArrt
 * @param {*} wrapper
 * @param {*} val
 * @returns {JSX.Element}
 */
const findTestByArrt = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export default findTestByArrt;
