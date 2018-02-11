import React from 'react';
import { connect } from 'react-redux';

class TweetList extends React.PureComponent {

  render() {
    const {tweets} = this.props

    return (
      <ul>
        {tweets.length ? (
          tweets.map((tweet) => 
            <li key={tweet.id}>
              {tweet.content}
            </li>
          )
        ) : (
        <div>
          投稿なし
        </div>
        )}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     tweetActions: bindActionCreators(TweetActions, dispatch),
//   };
// }

export default connect(
  mapStateToProps,
  {},
)(TweetList);
