import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDLhJQ0n2_3HXZLjLqN88_X2YNyWI94430';

YTSearch({key: API_KEY, term: 'fuckyou'}, function(data){
  console.log(data);
});

const App = () => { //ES6
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
