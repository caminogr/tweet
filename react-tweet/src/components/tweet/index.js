import React from 'react';

export default class Tweet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {textValue: ''}
  }

  changeText(e) {
    this.setState({textValue: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="TweetForm">
          <input type="text" value={this.state.textValue} onChange={this.changeText.bind(this)} />
        </div>
      </div>
    )
  }
}

