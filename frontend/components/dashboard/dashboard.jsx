import React from 'react';
import HeaderContainer from "../header/header_container";

const Dashboard = ({questions, openModal}) => (
  <div className="dashboard">
    <HeaderContainer />
    <h1>Hello I am the dashboard</h1>
    <button onClick={() => openModal('question')}>Ask a question</button>
  </div>
);

export default Dashboard;
