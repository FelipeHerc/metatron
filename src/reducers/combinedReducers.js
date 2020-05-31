import { combineReducers } from "redux";
import charAttributes from "./attributesReducer";

const rootReducer = combineReducers({ charAttributes });

export default rootReducer;
