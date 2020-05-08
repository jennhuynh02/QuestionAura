import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import QuestionFormContainer from '../questions/question_container';
import EditQuestionContainer from '../questions/edit_question_form_container';
import AnswerFormContainer from '../answer/answer_form_container';
import EditAnswerFormContainer from '../answer/edit_answer_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (Object.keys(modal)[0]) {
    case 'question':
      component = <QuestionFormContainer />;
      break;
    case 'editQuestion':
      component = <EditQuestionContainer />;
      break;
    case 'answer':
      component = <AnswerFormContainer questionId={modal.answer} />;
      break;
    case 'editAnswer':
      component = <EditAnswerFormContainer answerId={modal.editAnswer} />;
      break;
    default:
      return null;
  }

  return (
    // onClick={closeModal} <-- can add this to modal-parent to exit upon click outside of box
    <div id="modal-parent" onClick={closeModal}>
      <div id="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
