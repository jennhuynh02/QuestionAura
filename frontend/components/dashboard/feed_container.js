import { connect } from 'react-redux';
import Feed from './feed';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
