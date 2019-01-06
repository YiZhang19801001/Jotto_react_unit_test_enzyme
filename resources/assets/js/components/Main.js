import React from "react";
import { connect } from "react-redux";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
import { getSecretWord } from "../actions";
class Main extends React.Component {
  render() {
    return (
      <div className="container" data-test="component-main">
        <h1 className=" text-center">Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
function mapStateToProps({ success, secretWord, guessedWords }) {
  return { success, secretWord, guessedWords };
}
export default connect(
  mapStateToProps,
  { getSecretWord }
)(Main);
