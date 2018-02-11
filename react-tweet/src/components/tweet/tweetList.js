import React from 'react';

export default (props) => {

  return (
    <ul>
    {props.tweets.length ? (
      props.tweets.map((tweet) => 
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
