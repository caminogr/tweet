import React from 'react';

export default class TweetForm extends React.PureComponent {
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
    this.setState({textValue: ''})
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
