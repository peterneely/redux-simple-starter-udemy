import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className={setClassName(title)}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{showError(title)}</div>
        </div>

        <div className={setClassName(categories)}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">{showError(categories)}</div>
        </div>

        <div className={setClassName(content)}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">{showError(content)}</div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function setClassName(control) {
  return `form-group ${control.touched && control.invalid ? 'has-danger' : ''}`;
}

function showError(control) {
  return control.touched ? control.error : '';
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
