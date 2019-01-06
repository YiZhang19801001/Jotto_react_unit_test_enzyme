import React from "react";
import { connect } from "react-redux";

import { guessWord } from "../actions";

export class UnconnectedInput extends React.Component {
  /**
   * Create ref for input box
   * @method constructor
   * @param {object} props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();

    // bind function to component
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    // don't submit form
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.inputBox.current.value = "";
    }
  }

  /**
   * Render the component
   * @method Render
   * @returns {JSX.Element} - Rendered component
   */
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          ref={this.inputBox}
          className="form-control mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="input-submit-button"
          className="btn btn-primary mb-2"
          onClick={this.submitGuessedWord}
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
)(UnconnectedInput);
