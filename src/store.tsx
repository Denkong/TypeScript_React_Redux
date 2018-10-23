import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import rootReducer, { IROOT_REDUCER } from "./reducers/index";
import { IROOT_ACTION } from "./actions/Types";
import { composeWithDevTools } from "redux-devtools-extension";

const store: Store<IROOT_REDUCER, IROOT_ACTION> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
