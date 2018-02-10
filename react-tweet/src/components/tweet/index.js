import React from 'react';

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

class TweetForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    }
  }

  componentWillMount() {
    this.handleSendTweet = this.handleSendTweet.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  handleSendTweet() {
    this.props.sendTweet(this.state.textValue)
  }

  changeText(e) {
    this.setState({textValue: e.target.value});
  }

  render() {

    return (
      <form action="javascript:void(0)" onSubmit={this.handleSendTweet}>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
        <button type="submit">送信</button>
      </form>
    )
  }
}

class TweetList extends React.PureComponent {

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
