import React from "react";
import { connect } from "react-redux";

import { guessWord } from "../actions";

class Input extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          className="form-control mb-2 mx-sm-3"
          data-test="input-box"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="input-submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

function mapStateToProps({ success }) {
  return { success };
}

export default connect(
  mapStateToProps,
  { guessWord }
)(Input);
