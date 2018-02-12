import React from 'react';

import {Actions} from '../../actions/tweet';

export default class TweetForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    }
  }

  componentWillMount() {
    this.changeText = this.changeText.bind(this);
    this.handleSendTweet = this.handleSendTweet.bind(this);
  }

  handleSendTweet(e) {
    e.preventDefault();
    Actions.createAction(this.state.textValue)
    this.setState({textValue: ''})
  }

  changeText(e) {
    this.setState({textValue: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSendTweet}>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
        <button type="submit">送信</button>
      </form>
    )
  }
}
