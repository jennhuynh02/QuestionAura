import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // componentWillUnmount() {
  //   this.props.deleteQuestion();
  // }

  render() {
    return (
      <div className="feed-item">
        { this.props.question.ask }
        <button onClick={() => this.props.deleteQuestion()}>Delete Question</button>
      </div>
    );
  }
}


export default FeedItem;
