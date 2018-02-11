import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TweetActions from '../../actions/tweet'

class TweetForm extends React.PureComponent {
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
    this.props.tweetActions.createAction(this.state.textValue)
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

// function mapStateToProps(state) {
//   return {
//     tweets: state.tweets,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    tweetActions: bindActionCreators(TweetActions, dispatch),
  };
}

export default connect(
  () => ({}),
  mapDispatchToProps,
)(TweetForm);
