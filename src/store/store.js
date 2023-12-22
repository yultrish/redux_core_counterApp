import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import rootReducer from "./reducers";

const store = createStore(rootReducer)

export default store