import React from 'react';

export default class Tweet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {textValue: ''}
  }

  componentWillMount() {
    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    this.setState({textValue: e.target.value});
  }

  handleSubmit() {
    console.log("submit")
  }

  render() {
    return (
      <div>
        <div className="TweetForm">
          <form action="javascript:void(0)" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.textValue} onChange={this.changeText} />
            <button type="submit">送信</button>
          </form>
        </div>
      </div>
    )
  }
}

