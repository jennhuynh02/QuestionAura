import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
