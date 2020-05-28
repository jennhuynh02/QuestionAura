import React from 'react';
import FeedItemContainer from '../dashboard/feed_item_container';

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

  search() {
    console.log(this.category);
    const { questions } = this.props;
    for (let i = 0; i < questions.length; i += 1) {
      if (questions[i].ask.includes(this.category)) {
        this.categoryResults.push(questions[i]);
        console.log(this.categoryResults);
      }
    }
    if (this.categoryResults.length > 0) {
      // return (<div>{this.categoryResults[0].ask}</div>);
      // this.categoryResults.map((question) => {
      //   console.log(question)
        return(
          <FeedItemContainer question={this.categoryResults[0]} key={this.categoryResults[0].id} />
          )
      // });
    }
  }

  render() {
    return (
      <div>
        {this.search()}
      </div>

    );
  }
}

export default CategoryPage;
