import React from 'react';

import TweetForm from './tweetForm'
import TweetList from './tweetList'

export default class Tweet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {id: 0, content: "hoge"},
        {id: 1, content: "fuga"},
        {id: 2, content: "piyo"},
      ],
    }
  }

  componentWillMount() {
    this.sendTweet = this.sendTweet.bind(this);
  }

  sendTweet(value) {
    console.log(value)
  }

  render() {
    return (
      <div>
        <div>
          <TweetForm sendTweet={this.sendTweet}/>
          <TweetList tweets={this.state.tweets}/>
        </div>
      </div>
    )
  }
}
