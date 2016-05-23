import { combineReducers } from 'redux';
import PostReducer from './reducer-posts';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
