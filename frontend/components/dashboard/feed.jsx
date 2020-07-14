import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topButton: 'none',
    }
    this.scrollFunction = this.scrollFunction.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }


  scrollFunction(e) {
    console.log("hello")
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.setState({ topButton: 'block'})
    } else {
      this.setState({ topButton: 'none' })
    }
  }
  
  topFunction() {
    document.getElementById('question-invite').scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const {
      questions
    } = this.props;

    return (
      <div>
        {questions.map((question) => (
          <FeedItemContainer question={question} key={question.id} />
        ))}

        <button onClick={() => this.topFunction()} id="myBtn" title="Go to top" style={{display: this.state.topButton}}>Top</button>
      </div>

    );
  }
}

export default Feed;
