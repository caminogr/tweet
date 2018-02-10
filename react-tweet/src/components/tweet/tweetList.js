import React from 'react';

export default class TweetList extends React.PureComponent {

  render() {
    const tweets = this.props.tweets

    return (
      <ul>
      {tweets.length ? (
        tweets.map((tweet, i) => 
          <li className="Tweet" key={tweet.id}>
            {tweet.content}
          </li>
        )
      ) : (
        null
      )}
    </ul>
    )
  }
}
