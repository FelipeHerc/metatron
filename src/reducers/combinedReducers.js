import { combineReducers } from "redux";
import charAttributes from "./attributesReducer";
import chakra from "./chakraReducer";

const rootReducer = combineReducers({ charAttributes, chakra });

export default rootReducer;
