export function createAction(content) {
  return {
    type: "TWEETS/CREATE",
    content: content,
  }
}
