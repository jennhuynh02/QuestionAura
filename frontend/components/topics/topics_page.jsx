import React from 'react';
import TopicsContainer from './topics_container';
import FeedItemContainer from '../dashboard/feed_item_container';
import HeaderContainer from '../header/header_container';

class TopicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchAnswers, fetchUsers } = this.props;
    fetchAnswers();
    fetchUsers();
  }

  render() {
    const { topicName, topics, first, second } = this.props;

    let mainTopic = 0;
    let mainTopicId = 0;
    let showMe = 0;

    if (topics.length > 0) {
      for (let i = 0; i < topics.length; i += 1) {
        if (topics[i].name === topicName) {
          mainTopic = topics[i];
          showMe = mainTopic.questions;
          mainTopicId = mainTopic.id;
        }
      }
    }

    const toRender = [];
    if (showMe.length > 0) {
      for (let i = 0; i < showMe.length; i += 1) {
        toRender.push(showMe[i]);
      }
    }

    return (
      <div className="topic-page-background">
        <HeaderContainer first={first} second={second} />

        <div className="topic-page">
          <TopicsContainer />
          <div className="topic-dash">

            <div className="topic-info">
              <img className="topic-img" src={window[topicName]} alt={topicName} />
              <div className="topic-name">
                {topicName}
              </div>
            </div>
            {toRender.map((question) => (
              <FeedItemContainer question={question} key={question.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TopicPage;
