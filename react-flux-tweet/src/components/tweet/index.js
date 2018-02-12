import React, {Fragment} from 'react';

import TweetForm from './tweetForm';
import TweetList from './tweetList';

export default () => {
  return (
    <Fragment>
      <TweetForm />
      <TweetList />
    </Fragment>
  )
}
