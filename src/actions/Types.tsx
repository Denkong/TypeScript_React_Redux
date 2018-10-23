// FETCH_POSTS
export interface IFETCH_POST {
  type: "FETCH_POSTS";
  payload: IPost[];
}

// NEW_POSTS
export interface INEW_POST {
  type: "NEW_POSTS";
  payload: IPost;
}
// ALL ACTION
export type IROOT_ACTION = IFETCH_POST | INEW_POST;

// INTERFACE REDUCER
// PostAction
export type IPostAction = IFETCH_POST | INEW_POST;

// OTHER
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  test: string;
}
