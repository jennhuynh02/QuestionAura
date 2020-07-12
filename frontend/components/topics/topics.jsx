import React from 'react';
import { Link } from 'react-router-dom';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.topics = this.props.topics;
  }


  componentDidMount() {
    const { fetchTopics } = this.props;
    fetchTopics();
  }

  render() {
    const topics = this.props.topics.map((topic) => (
      <li key={topic.id}>
        <Link className="link" to={`/topics/${topic.name}`}>
          <div className="category-bar">
            <img className="category-icon" src={window[topic.name]} />
            <span className="category">{topic.name}</span>
          </div>
        </Link>
      </li>
    ));


    return (
      <div className="categories-bar">
        <ul>
          <li>
            <Link className="link" to="/">
              <div className="category-bar">
                <img className="category-icon" src={window.Feed} />
                <span className="category" id="feed-icon">Feed</span>
              </div>
            </Link>
          </li>
          {topics}
        </ul>
        <div>
          <a className="resources" href="https://github.com/jennhuynh02" target="_blank">GitHub</a>
          <span className="resources-spacing">·</span>
          <a className="resources" href="https://www.linkedin.com/in/jenniferanhhuynh/" target="_blank">LinkedIn</a>
          <span className="resources-spacing">·</span>
          <br />
          <a className="resources" href="https://jennhuynh02.github.io/jenniferhuynh/" target="_blank">Website</a>
          {/* About * Careers * Terms * Privacy * Acceptable Use * Businesses */}
        </div>
      </div>
    );
  }
}

export default Topics;
