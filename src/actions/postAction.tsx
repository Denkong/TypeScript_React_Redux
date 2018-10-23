import { IFETCH_POST, INEW_POST } from "./Types";
import { Dispatch } from "redux";
/*
const incrementCounter = (payload: IPost[]): IFETCH_POST => ({
  type: FETCH_POSTS,
  payload
});*/

export const fetchPosts = () => (dispatch: Dispatch<IFETCH_POST>) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: "FETCH_POSTS",
        payload: json
      })
    );
};

export interface ICreatePosts {
  title: string;
  body: string;
}

export const createPosts = (postData: ICreatePosts) => (
  dispatch: Dispatch<INEW_POST>
) => {
  console.log(postData);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: "NEW_POSTS",
        payload: json
      })
    );
};
