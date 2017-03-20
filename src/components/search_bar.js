import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
  render(){
    return <input onChange = {this.onInputChange}/>;
  }
  onInputChange(event){
    console.log(event.target.value);
  }
};

export default SearchBar;
