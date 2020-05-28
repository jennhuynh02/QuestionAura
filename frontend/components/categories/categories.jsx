import React from 'react';
import { Link } from 'react-router-dom';

function Categories(props) {
  return (
    <div className="categories-bar">
      <Link className="link" to="/">
        <div className="category-bar">
          <img className="category-icon" src={window.feed} />
          <span className="category" id="feed-icon">Feed</span>
        </div>
      </Link>

      <Link className="link" to="/category/code">
        <div className="category-bar">
          <img className="category-icon" src={window.coding} />
          <span className="category">Code</span>
        </div>
      </Link>

      <Link className="link" to="/category/finance">
        <div className="category-bar">
          <img className="category-icon" src={window.finance} />
          <span className="category">Finance</span>
        </div>
      </Link>

      <Link className="link" to="/category/career">
        <div className="category-bar">
          <img className="category-icon" src={window.career} />
          <span className="category">Career</span>
        </div>
      </Link>

      {/* <p className="resources">About * Careers * Terms * Privacy * Acceptable Use * Businesses</p> */}
    </div>
  );
}

export default Categories;
