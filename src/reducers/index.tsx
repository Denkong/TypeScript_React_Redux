import { combineReducers } from "redux";
import { postReducer, IPostReducer } from "./postReducer";
import { IROOT_ACTION } from "../actions/Types";

export interface IROOT_REDUCER {
  postReducer: IPostReducer;
}

export default combineReducers<IROOT_REDUCER, IROOT_ACTION>({ postReducer });
