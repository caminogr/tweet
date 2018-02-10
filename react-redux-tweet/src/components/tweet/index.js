import React from 'react';

import TweetForm from './tweetForm'
import TweetList from './tweetList'

export default class Tweet extends React.PureComponent {
  render() {
    return (
      <div>
        <TweetForm />
        <TweetList />
      </div>
    )
  }
}
