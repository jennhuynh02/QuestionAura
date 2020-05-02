import React from 'react';
import HeaderContainer from '../header/header_container';
import CategoriesContainer from '../categories/categories_container';

const Dashboard = ({ questions, openModal, closeModal }) => (
  <div className="dashboard">
    <HeaderContainer openModal={openModal, closeModal} />
    <div className="feed">
      <CategoriesContainer />
      <div className="question-click" onClick={() => openModal('question')}>
        <h1 id="question-invite">What is your question or link?</h1>
      </div>
    </div>
  </div>
);

export default Dashboard;
