import {EventEmitter} from 'events';
import {appDispatcher} from '../dispatchers/appDispatcher'

let tweets = []

class TweetStore extends EventEmitter {
  constructor() {
    super();

    this.dispatchToken = appDispatcher.register(action => {
      switch(action.type) {
        case "TWEETS/CREATE":
          const index = tweets.length+1
          tweets = [].concat(tweets);
          tweets.push({ id: index, content: action.content })
          this.emit('CHANGE');
          break; 

        default: 
          break;
      }
    }
  )};

  getAll() {
    return tweets;
  }
}
export default new TweetStore();
