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
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  search() {
    this.searchResults = [];
    const { questions, topics } = this.props;
    let topicList = {};
    if (topics.length > 0) {
      for (let i = 0; i < topics.length; i++) {
        topicList[topics[i].id] = topics[i].name
      }
    }
    console.log(topicList)
    for (let i = 0; i < questions.length; i += 1) {
      if (questions[i].ask.includes(this.state.searchInput) && this.searchResults.length !== 5) {
        this.searchResults.push(questions[i]);
      }
    }
    if (this.searchResults.length > 0) {
      return (
        <ul className="dropdown-content">
          {this.searchResults.map((question) => (
            <li onClick={(e) => {e.preventDefault();
              location.href = `/#/questions/${question.id}`}} 
              key={question.id} className="searchbar-result" >
                {/* <span className="topic-search">Question</span> */}
                <img className="search-img" src={window[topicList[question.topic_id]]} />
                {question.ask}
                </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="dropdown">
        <form>
          <div className="searchbar">
            <img className="mag-glass" src={window.magnifyingGlass} />
          <input
            type="text"
            placeholder="Search Question Aura"
            value={this.state.searchInput}
            onChange={this.update('searchInput')}
            className="search-input"
            />
          </div>
        </form>
          {this.search()}
      </div>
    );
  }
}

export default SearchBar;
