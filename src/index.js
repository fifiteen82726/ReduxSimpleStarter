import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDLhJQ0n2_3HXZLjLqN88_X2YNyWI94430';

YTSearch({key: API_KEY, term: 'nba'}, function(data){
  console.log(data);
});

// 要用 State的話要換成 class function
// const App = () => { //ES6
class App extends Component {
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
