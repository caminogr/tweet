import { appDispatcher } from '../dispatchers/appDispatcher';

export const Actions = {
  createAction: (content) => {
    appDispatcher.dispatch({
      type: "TWEETS/CREATE",
      content: content,
    })
  }
}
