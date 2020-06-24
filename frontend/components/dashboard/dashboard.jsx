import React from 'react';
import HeaderContainer from '../header/header_container';
import FeedContainer from './feed_container';
import TopicsContainer from '../topics/topics_container';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const {
      openModal, closeModal, first, second,
    } = this.props;

    return (
      <div className="dashboard">
        <HeaderContainer first={first} second={second} />
        <div className="feed">
          <TopicsContainer />
          <div className="the-content">
            <div className="question-click" onClick={() => openModal({ question: -1 })}>
              <p className="question-name">
                {first}
                {' '}
                {second}
              </p>
              <h1 id="question-invite">What is your question or link?</h1>
            </div>
            <FeedContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
