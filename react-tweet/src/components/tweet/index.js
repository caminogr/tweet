import React from 'react';

export default class Tweet extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.state = {
      // tweets: [],
    // }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <div>
          <TweetForm />
          <TweetList />
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
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeText(e) {
    this.setState({textValue: e.target.value});
  }

  handleSubmit() {
    console.log(this.state.tweets)
  }


  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
        <button type="submit">送信</button>
      </form>
    )
  }
}

class TweetList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        "hoge",
        "fuga",
        "piyo",
      ],
    }
  }

  render() {
    const tweets = this.state.tweets

    return (
      <ul>
      {tweets.length ? (
        tweets.map((tweet, i) => 
          <li className="Tweet">
            {tweet}
          </li>
        )
      ) : (
        null
      )}
    </ul>
    )
  }
}
