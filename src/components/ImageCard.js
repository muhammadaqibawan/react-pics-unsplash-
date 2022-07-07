import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {
            spans: 0
        }
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = ()=>{
       const height = this.imageRef.current.clientHeight;
       const spans = Math.ceil(height/ 10);
       this.setState({ spans })
    }

    onComplete = ()=>{
        this.props.onLastImageCallTheFunc()
    }

    render() {
        const { urls, description } = this.props.image;
        return (
            <div style={{ 'gridRowEnd': `span ${this.state.spans}` }}>
                 <img 
                 onLoad={this.onComplete} 
                 onError={this.onComplete} 
                 ref={this.imageRef} 
                 src={urls.regular} 
                 alt={description} />
            </div>
        );
    }
}

export default ImageCard;