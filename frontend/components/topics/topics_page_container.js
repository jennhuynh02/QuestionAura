import { connect } from 'react-redux';
import TopicPage from './topics_page';

const mapStateToProps = (state, { match }) => ({
  topic: match.params.topic,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);