import React from 'react';

class Categories extends React.Component {
  render() {
    return (
      <div className="categories-bar">
        <br/>
        <h1 className="category">Categories:</h1>
        <p className="category">Coding</p>
        <p className="category">Bootcamp</p>
        <p className="category">Career</p>
        <p className="category"> Finance</p>

        <p className="resources">About * Careers * Terms * Privacy * Acceptable Use * Businesses</p>
      </div>
    );
  }
}

export default Categories;
