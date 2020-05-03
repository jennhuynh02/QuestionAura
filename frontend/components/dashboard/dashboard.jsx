import React from 'react';
import HeaderContainer from '../header/header_container';
import CategoriesContainer from '../categories/categories_container';
import Feed from './feed_container';

const Dashboard = ({ questions, openModal, closeModal, first, second }) => (
  <div className="dashboard">
    <HeaderContainer openModal={openModal, closeModal} />
    <div className="feed">
      <CategoriesContainer />
      <div className="the-content">
        <div className="question-click" onClick={() => openModal({'question': -1})}>
<p className="question-name">{first} {second}</p>
          <h1 id="question-invite">What is your question or link?</h1>
        </div>
        <Feed />
      </div>
    </div>
  </div>
);

export default Dashboard;
