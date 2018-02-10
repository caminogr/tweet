import { combineReducers } from 'redux';

const initialState = {
  id: 0,
  content: "",
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'createAction':
      console.log("createAction")

    default: 
      return state
  }
}
