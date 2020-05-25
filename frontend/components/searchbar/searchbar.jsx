import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.searchResults = [];
    // this.handleQuestionLink = this.handleQuestionLink.bind(this);
  }

  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  search() {
    this.searchResults = [];
    const { questions } = this.props;
    for (let i = 0; i < questions.length; i += 1) {
      if (questions[i].ask.includes(this.state.searchInput)) {
        this.searchResults.push(questions[i]);
      }
    }
    if (this.searchResults.length > 0) {
      return (
        <ul className="dropdown-content">
          {this.searchResults.map((question) => (
            <li onClick={(e) => {e.preventDefault();
    location.href = `/#/questions/${question.id}`;}} key={question.id} >{question.ask}</li>
          ))}
        </ul>
      );
    }
  }

  // handleQuestionLink(e) {
  //   e.preventDefault();
  //   location.href = `/#/questions/${this.searchResults[0].id}`;
  // }


  render() {
    return (
      <div className="dropdown">
        <form>
          <input
            type="text"
            placeholder="searchbar"
            value={this.state.searchInput}
            onChange={this.update('searchInput')}
            className="form-input-boxes"
          />
        </form>
          {this.search()}
      </div>
    );
  }
}

export default SearchBar;
