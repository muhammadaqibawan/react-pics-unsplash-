import SearchBar from './components/SearchBar';
import axios from './axios/index';
import ImageList from './components/ImageList';

import React, { Component } from 'react';

class App extends Component {

  state = {
    images: []
  }

  onFormSubmit = (value)=>{
    axios('search/photos',{
      params: {
        query: value
      }
    })
      .then((response) =>{
        this.setState({images: response.data.results })
      }).catch(error=>{
      })
  }

  render() {
    return (
    <div className="ui container" style={{ 'marginTop': '10px' }}>
      <SearchBar 
      onFormSubmit={this.onFormSubmit} />
      <p>Results: { this.state.images.length } </p>
      <ImageList images={ this.state.images }></ImageList>
    </div>
    );
  }
}

export default App;
