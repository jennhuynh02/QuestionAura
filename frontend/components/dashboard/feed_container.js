import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = (state) => ({
  questions: state.entities.questions,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
