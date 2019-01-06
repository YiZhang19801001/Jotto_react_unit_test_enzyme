import React from "react";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
export default class Main extends React.Component {
  render() {
    return (
      <div className="container" data-test="component-main">
        <h1 className=" text-center">Jotto</h1>
        <Congrats success={true} />
        <Input />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}
