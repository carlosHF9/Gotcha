import { combineReducers } from "redux";
import AppReducer from "./reducer";



const rootReducer = combineReducers({
    AppReducer: AppReducer
})


export default rootReducer
