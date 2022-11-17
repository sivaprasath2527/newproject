import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer"

const rootReducer = combineReducers({ task: MovieReducer });

export default rootReducer
