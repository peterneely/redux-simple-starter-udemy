import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const getErrorText = Symbol('getErrorText');
const getValidationClass = Symbol('getValidationClass');
const onSubmit = Symbol('onSubmit');

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this[onSubmit].bind(this))}>
        <h3>Create a new post</h3>
        <div className={`form-group ${this[getValidationClass](title)}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{this[getErrorText](title)}</div>
        </div>

        <div className={`form-group ${this[getValidationClass](categories)}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">{this[getErrorText](categories)}</div>
        </div>

        <div className={`form-group ${this[getValidationClass](content)}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">{this[getErrorText](content)}</div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }

  [getErrorText](control) {
    return control.touched ? control.error : '';
  }

  [getValidationClass](control) {
    return control.touched && control.invalid ? 'has-danger' : '';
  }

  [onSubmit](props) {
    this.props.createPost(props).then(() => { this.context.router.push('/') });
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}
