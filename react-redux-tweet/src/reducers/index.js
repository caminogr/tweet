const initialState = {
  id: 0,
  content: "",
}

export default function reduer(state = initialState, action) {
  switch(action.type) {
    case "TWEETS/CREATE":
      console.log("createAction")

    default: 
      return state
  }
}
