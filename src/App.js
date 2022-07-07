import SearchBar from './components/SearchBar';
import axios from './axios/index';
import ImageList from './components/ImageList';
import Loader from './components/Loader/Loader';

import React, { Component } from 'react';

class App extends Component {

  state = {
    images: [],
    loader: false,
    page: 1,
    searchTerm: ''
  }

  onFormSubmit = (value)=>{
    this.setState({ images: [], page: this.state.page, loader: true, searchTerm: value  })
    this.loadImages(value)
  }

  loadImages = (value)=>{
    axios('search/photos',{
      params: {
        query: value,
        page: this.state.page,
        per_page: 10
      }
    })
      .then((response) =>{
        const images = [...this.state.images]
        this.setState({images: [...images, ...response.data.results], searchTerm: this.state.searchTerm, page: this.state.page + 1, loader: false })
      }).catch(error=>{
      })
  }

  onImagesLoaded = ()=>{
    this.setState({ images: [...this.state.images], searchTerm: this.state.searchTerm, page: this.state.page, loader: false })
  }

  onIntersection = (e)=>{
    console.log(e.inView, e.entry.isIntersecting, !this.state.loader)
    if(e.inView && e.entry.isIntersecting && !this.state.loader) {
      this.setState({ ...this.setState, loader: true})
      this.loadImages(this.state.searchTerm);
    }
  }

  render() {
    return (
    <div className="ui container" style={{ 'marginTop': '10px' }}>
      <SearchBar 
      onFormSubmit={this.onFormSubmit} />
      <p>Results: { JSON.stringify(this.state.loader) } { this.state.images.length } </p>
      { this.state.loader && <Loader />  }
      <ImageList images={ this.state.images } allImagesLoaded={this.onImagesLoaded} onIntersection={this.onIntersection} />
    </div>
    );
  }
}

export default App;
