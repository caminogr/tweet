const initialState = {
  tweets: [],
}

export default function tweetReduer(state = initialState, action) {
  switch(action.type) {
    case "TWEETS/CREATE":
      const tweets = [].concat(state.tweets);
      const index = state.tweets.length+1
      tweets.push({ id: index, content: action.content })
      const nextState = {...state, tweets}

      return nextState

    default: 
      return state
  }
}
