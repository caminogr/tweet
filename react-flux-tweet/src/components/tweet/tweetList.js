import React from 'react';

import TweetStore from '../../stores/tweetStore';

export default class TweetForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tweets: TweetStore.getAll(),
    }

    TweetStore.on("CHANGE", () => {
        this._onChange();
    });
  }

  _onChange() {
    this.setState({ tweets: TweetStore.getAll() });
  }

  render() {
    const tweets = this.state.tweets

    return (
      <ul>
        {tweets.length ? (
          tweets.map((tweet) => 
            <li key={tweet.id}>
              {tweet.content}
            </li>
          )
        ) : (
        <div>
          投稿なし
        </div>
        )}
      </ul>
    )
  }
}
