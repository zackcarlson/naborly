import { LOAD_MORE, GET_POST } from '../constants/action-types';

export function loadMore() {
  return { 
    type: LOAD_MORE,
    pageSize: 10
  };
}

export function getPost(id) {
  return {
    type: GET_POST,
    currentPost: id
  };
}