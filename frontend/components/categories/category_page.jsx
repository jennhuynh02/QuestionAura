import React from 'react';
import FeedItemContainer from '../dashboard/feed_item_container';
import HeaderContainer from '../header/header_container';
import CategoriesContainer from './categories_container';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = this.props.category;
    this.categoryResults = [];
  }

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }

  render() {
    const { questions } = this.props;
    console.log(this.props.category);
    console.log(questions);
    this.categoryResults = [];
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].ask.toLowerCase().includes(this.props.category)) {
        this.categoryResults.push(questions[i]);
      }
    }
    console.log(this.categoryResults);
    const {
      openModal, closeModal, first, second,
    } = this.props;
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <HeaderContainer openModal={openModal, closeModal} />
        </div>
        <div className="feed">
          <CategoriesContainer />
          <div className="the-content">
            {this.categoryResults.map((question) => (
              <FeedItemContainer question={question} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
