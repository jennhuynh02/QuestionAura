import React from 'react';

class Categories extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCodingQuestionLink(e) {
    e.preventDefault();
    location.href = "/#/questions/20";
  }
  handleBootCampQuestionLink(e) {
    e.preventDefault();
    location.href = "/#/questions/30";
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
        <br/>
        <h1 className="category-header">Categories:</h1>
        <p className="category" onClick={this.handleCodingQuestionLink}>Coding</p>
        <p className="category" onClick={this.handleBootCampQuestionLink}>Bootcamp</p>
        <p className="category" onClick={this.handleCareerQuestionLink}>Career</p>
        <p className="category" onClick={this.handleFinanceQuestionLink}> Finance</p>

        {/* <p className="resources">About * Careers * Terms * Privacy * Acceptable Use * Businesses</p> */}
      </div>
    );
  }
}

export default Categories;
