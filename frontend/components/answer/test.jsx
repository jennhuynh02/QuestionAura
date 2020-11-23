import React from 'react';
import Spinner from './spinner';
import Arrow from './upper_right_arrow';

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true,
    };
    this.submit = this.submit.bind(this);
  }

  //  This validate function is a helper function used to determine if a url is valid in the "submit" class method.  Line 16:  RegExp expression that checks for invalid urls - I refined this checker with my cohort mate a while ago, and kept this in my notes.  Line 17:  returns a boolean as to whether the url passed is valid.
  validate(url) {
    const urlCheck = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return urlCheck.test(url);
  }

  //  This submit function is a class method that is binded to the class in the constructor with (this) - we need to do this in order to change state/excute setState.  Line 24:  create a validated const by using the validate function on the form's input value; it will either return false or true.  Line 25:  if it is true, we will call the onSubmit function passed down to this component via props.  Line 26:  set the valid state according to the validation boolean return; this state will be used to help set the css for in the input box - if input is invalid, its borders will turn red to indicate to the user that the url is invalid.
  submit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const validated = this.validate(this.input.value);
    if (validated) onSubmit(this.input.value);
    this.setState({
      valid: validated,
    });
  }

  render() {
    const { isLoading, urls } = this.props;
    const { valid } = this.state;

    //  This const is used to css the HTML input node on line 42.  It will check if the url submitted is valid, if so, it will return an empty string, otherwise, it will be set to the Invalid css class which will set the border of the input to red.
    const validated = valid ? '' : 'Invalid';

    //  Line 42:  Form for url input, includes input and button nodes.  Will be disabled if props.isLoading is true.
    //  Line 48:  Renders list of urls created - list is provided via props and will update after new url has been generated.  List is a doubly-nested array, meaning that each url provided is an array that contains two values, the first is the original array and the second is the newly generated array.
    return (
      <>
        <form onSubmit={(e) => this.submit(e)} disabled={isLoading} className="Form">
          <input ref={(input) => { this.input = input; }} name="input" className={validated} placeholder="Shorten your link"/>
          <button type="submit" disabled={isLoading}>{isLoading ? <Spinner /> : 'Submit'}</button>
        </form>

        <ul className="UrlList">
          {urls.map((url) => (
            <li data-automation-id="url-item" key={url[0]}>
              <p>{url[0]}</p>
              <a href={url[1]} value={url[1]} target="_blank">
                {url[1]}
                {' '}
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default URLInput;
