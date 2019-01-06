import { combineReducers } from "redux";

import success from "./successReducer";
import guessedWords from "./guessedWord";

export default combineReducers({
  success,
  guessedWords
});
