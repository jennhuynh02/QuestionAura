import React from 'react';
import HeaderContainer from '../header/header_container';
import CategoriesContainer from '../categories/categories_container';
import FeedContainer from './feed_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchQuestions();
    this.props.fetchUsers();
  }

  render() {
    const { openModal, closeModal, first, second, users } = this.props;
    return (
    <div className="dashboard">
      <HeaderContainer openModal={openModal, closeModal} />
      <div className="feed">
        <CategoriesContainer />
        <div className="the-content">
          <div className="question-click" onClick={() => openModal({'question': -1})}>
          <p className="question-name">{first} {second}</p>
            <h1 id="question-invite">What is your question or link?</h1>
          </div>
          <FeedContainer users={users} />
        </div>
      </div>
    </div>
    )
  }
};

export default Dashboard;
