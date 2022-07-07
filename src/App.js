import SearchBar from './components/SearchBar';
import axios from './axios/index';
import ImageList from './components/ImageList';
import Loader from './components/Loader/Loader';

import React, { Component } from 'react';

class App extends Component {

  state = {
    images: [],
    loader: false
  }

  onFormSubmit = (value)=>{
    this.setState({ images: [], loader: true })
    axios('search/photos',{
      params: {
        query: value
      }
    })
      .then((response) =>{
        const images = [...this.state.images]
        this.setState({images: [...images, ...response.data.results], loader: this.state.loader })
      }).catch(error=>{
      })
  }

  onImagesLoaded = ()=>{
    this.setState({ images: [...this.state.images], loader: false })
  }

  render() {
    return (
    <div className="ui container" style={{ 'marginTop': '10px' }}>
      <SearchBar 
      onFormSubmit={this.onFormSubmit} />
      <p>Results: { JSON.stringify(this.state.loader) } { this.state.images.length } </p>
      { this.state.loader && <Loader />  }
      <ImageList images={ this.state.images } allImagesLoaded={this.onImagesLoaded} />
    </div>
    );
  }
}

export default App;
