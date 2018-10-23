import { IPostAction, IPost } from "../actions/Types";

export interface IPostReducer {
  items: IPost[];
  item: IPost | {};
}

export function postReducer(
  state: IPostReducer = {
    items: [],
    item: {}
  },
  action: IPostAction
): IPostReducer {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, items: action.payload };
    case "NEW_POSTS":
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
