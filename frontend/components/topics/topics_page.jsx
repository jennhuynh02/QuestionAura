import React from 'react';
import TopicsContainer from './topics_container';
import FeedItemContainer from '../dashboard/feed_item_container';

class TopicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="topic-page">
        <TopicsContainer />
        <div className="topic-dash">
          <div className="topic-info">
            <img className="topic-img" src={window[this.props.topic]} />
            <div className="topic-name">
              {this.props.topic}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicPage;
