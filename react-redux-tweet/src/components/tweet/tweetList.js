import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TweetActions from '../../actions/tweet'

class TweetList extends React.PureComponent {
  render() {
    return (
      <div>TweetList</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tweetActions: bindActionCreators(TweetActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);
