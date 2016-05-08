import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAcHXqlzROnAQkD2anN84jhR1uzbeRP5ps';

const App = () => {
  return (
   <div>
    <SearchBar />
   </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
