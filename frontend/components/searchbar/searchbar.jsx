import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.searchResults = [];
  }

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  search() {
    this.searchResults = [];
    const { questions } = this.props;
    console.log("all questions");
    console.log(questions);
    // const qObject = Object.values(questions)[0];
    // console.log(qObject.ask);
    for (let i = 0; i < questions.length; i += 1) {
      if (questions[i].ask.includes(this.state.searchInput)) {
        this.searchResults.push(questions[i]);
      }
    }
    console.log("search results after input");
    console.log(this.searchResults);
    console.log("first result");
    console.log(this.searchResults[0]);
    if (this.searchResults.length > 0) {
      console.log(this.searchResults[0].ask);
      return (
        <ul className="dropdown-content">
          <li>{this.searchResults[0].ask}</li>
        </ul>
      );
    }
  }

  handleQuestionLink(e) {
    e.preventDefault();
    location.href = `/#/questions/${question.id}`;
  }


  render() {
    return (
      <div>
        <form className="dropdown">
          <input
            type="text"
            placeholder="searchbar"
            value={this.state.searchInput}
            onChange={this.update('searchInput')}
            className="form-input-boxes"
          />
          {this.search()}
        </form>
      </div>
    );
  }
}

export default SearchBar;
