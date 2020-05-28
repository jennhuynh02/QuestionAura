import React from 'react';

class Categories extends React.Component {

  constructor(props) {
    super(props);
  }

  handleFeedLink(e) {
    e.preventDefault();
    location.href = "/";
  }
  handleCodingQuestionLink(e) {
    e.preventDefault();
    location.href = "/#/category/the";
  }
  handleCareerQuestionLink(e) {
    e.preventDefault();
    location.href = "/#/questions/40";
  }
  handleFinanceQuestionLink(e) {
    e.preventDefault();
    location.href = "/#/questions/60";
  }


  render() {
    return (
      <div className="categories-bar">
        <div className="category-bar">
          <img className="category-icon" src={window.feed} />
          <span className="category" onClick={this.handleFeedLink} id="feed-icon">Feed</span>
        </div>
        <div className="category-bar">
          <img className="category-icon" src={window.coding} />
          <span className="category" onClick={this.handleCodingQuestionLink}>Coding</span>
        </div>
        <div className="category-bar">
          <img className="category-icon" src={window.finance} />
          <span className="category" onClick={this.handleFinanceQuestionLink}>Finance</span>
        </div>
        <div className="category-bar">
          <img className="category-icon" src={window.career} />
          <span className="category" onClick={this.handleCareerQuestionLink}>Career</span>
        </div>

        {/* <p className="resources">About * Careers * Terms * Privacy * Acceptable Use * Businesses</p> */}
      </div>
    );
  }
}

export default Categories;
