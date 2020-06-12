import React from 'react';
import TopicsContainer from './topics_container';
import FeedItemContainer from '../dashboard/feed_item_container';
import HeaderContainer from '../header/header_container';

class TopicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { questions, topicName, topics, first, second } = this.props;

    const mainTopic = [];
    let mainTopicId = 1;
    if (topics.length > 0) {
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].name === topicName) {
          mainTopic.push(topics[i]);
          mainTopicId = mainTopic[0].id;
        }
      }
    }

    const toRender = [];
    if (questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].topic_id === mainTopicId) {
          toRender.push(questions[i]);
        }
      }
    }

    return (
      <div>
        <HeaderContainer first={first} second={second} />

        <div className="topic-page">
          <TopicsContainer />
          <div className="topic-dash">

            <div className="topic-info">
              <img className="topic-img" src={window[topicName]} />
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
