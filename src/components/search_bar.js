import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { term: ''}
  }

  render(){
    return <input onChange = {event => console.log(event.target.value)} />;
  }
};

export default SearchBar;
