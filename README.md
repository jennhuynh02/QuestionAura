# Question Aura
[Link to live webpage:](https://question-aura.herokuapp.com/#/)

## Demo

![demo](demo.gif) 

## Motivations, Thoughts, and Consideration Behind This Project
In attempt to clone a dynamic and social application/website, I've opted to clone Quora, a highly revered online platform used as a public question and answer forum.  Question Aura, was named in light of the discourse that evolves from a question, hence the appending name Aura - which by definition, means "a subtly pervasive quality or atmosphere seen as emanating from a person, place of thing" (Dictionary.com).

While working on this project, I was able to seek advice and procure coding help from my peers and friends.  In the process of debugging with others, I have learned a lot about different strategies I could use to detect issues, fix them, and improve the structure and performance of my code.  This project not only allowed me to exercise some of my capabilities, but it was also a very great learning experience that allowed me to create something and work with others in the process.  I'm very grateful for the help, knowledge, and programming wisdon that I've received along the way.
[Debugging Log:](https://docs.google.com/document/d/11Oeb9K5Ra3nxA3HWP12k2kZnH83hjMMHCFqQQxpPf_4/edit)

One of the biggest challenges in programming is being able to refactor code efficiently and manage data effectively, without incurring underlying pervasive issues such as bugs and glitches.  An integrated test suite would have been ideal in testing the entire code base while building new features; without such, bugs would go undetected until the feature was tried and did perform as expected.  Also, while receiving advice and help, I realized that writing clean code so that it would be easily understood by others is very important.  My future attempts in revisiting this project would include refactoring the code with the DRY approach (don't repeat yourself), writing more dynamic components that could be utilized for different features (for a more uniform UI experience), and optimizing the organization of data to render content personalized to the user.


## Features Overview and Technologies Involved
* Ruby on Rails
  - A server-side web application framework, built with the Ruby programming language, which was used for our backend development.  The rails framework holds a model, view, controller architecture that allows for communication with the database, handling of requests/changes, and rendering of templates/information to be presented to the user.  Rails included: (1) Active Record for the models portion, which creates objects and persists them to the database for storage, (2) Active Controller for backend actions such as the creation, reading/indexing, updating, and deletion of objects, (3) as well as the use of a domain specific language, known as Jbuilder to render JSON objects for our views portion.  
* Postgres SQL
  - An Object Relational Database Management System used to store and organize our information; i.e. to house and query our database.  The ORDMS involves the organization of different data types via the separation of tables, which are comprised of rows that represent objects.  Postgresql supports features such as: rules, subquery, and views that allow us to manage, sync, and organize data by methods such as associations (foreign key reference, table inheritance, etc.).
* Javascript React & Redux
  - React is used to create and render the front end of our application - the UI (user interface).  It is an advanced, abstracted version of HTML written in Javascript, which creates a virtual DOM where changes take effect almost instantaneously without a hard refresh.  It consists of components that hold mutable state, and allows for changes to render via the use of props (delivered by the container).
  - Redux combines the dispatched actions, reducers, and store altogether to change the state of components in the UI.  React-redux together adds dynamic functionality to components; combined with redux- middleware, this technology allowed for a smoother user experience.
* ESLinter and JS debugger
  - ESLinter was used to ensure that our Javascript coding was properly formatted to industry standards and to ensure syntax was used properly, and as necessary.
  - The debugger was used to catch any anomalies that may have hindered the app performance and to identify bugs that may have caused the code to break.  It allowed us to stop asynchronous actions and play through them to see where the issues were taking place.  
* Bcrypt
  - Used to encrypt user passwords in efforts to protect raw, users' passwords from being saved to our database (protection of users).
* AWS - S3
  - Amazon Web Services provides many cloud-based services, including picture uploads.

Altogether, these technologies were incorporated to:
(1) Create secure user authentication for secure login and logout of sessions.
(2) Allow users to create, read, update, and delete questions.
(3) Render modals that allowed users to answer questions, as well as edit and update their responses.
(3) Users are able to post and delete pictures along with their posts with jsut a few clicks.
(4) Question view page which contains all related answers, while dashboard contains the newest answer to all questions.

## Configuration and Deployment Instructions:
1. Download the zip from github 
2. Open terminal
3. Run "npm install" to run webpack
4. Run "bundle install" to install associated ruby/rails gems
5. Run "rails s" to start the rails server
6. Navigate to "localhost:3000" on browser to view app

Code Snippet of Modal:
  - This modal component allowed for the rendering of different containers/components (aka the question/answer post forms).  It incorporated the use of a hash to carry a slice of state to the modal, to create/edit/delete the appropriate object (post).
``` function Modal({ modal, closeModal }) {
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
```

