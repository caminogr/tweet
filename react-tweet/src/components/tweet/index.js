import React, {Fragment} from 'react';

import TweetForm from './tweetForm';
import TweetList from './tweetList';

export default class Tweet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    }
  }

  componentWillMount() {
    this.sendTweet = this.sendTweet.bind(this);
  }

  sendTweet(value) {
    const sum = this.state.tweets.length
    this.setState({ tweets: this.state.tweets.concat([{id: sum+1, content: value}]) })
  }

  render() {

    return (
      <Fragment>
        <TweetForm sendTweet={this.sendTweet}/>
        <TweetList tweets={this.state.tweets}/>
      </Fragment>
    )
  }
}
