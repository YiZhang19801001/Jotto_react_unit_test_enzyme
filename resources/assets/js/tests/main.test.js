import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Main from "../components/Main";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props, state = null) => {
  const wrapper = shallow(<Main {...props} />);

  return wrapper;
};

test("render without errors", () => {
  const wrapper = setup();

  expect(wrapper).toBeTruthy();
});
