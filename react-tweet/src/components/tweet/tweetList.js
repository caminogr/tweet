import React from 'react';

export default class TweetList extends React.PureComponent {

  render() {
    const tweets = this.props.tweets

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
