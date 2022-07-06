import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard.js';

const ImageList = ({ images }) => {
    const IMAGES = images.map(image =>{
        return <ImageCard image={image}  key={image.id} /> 
    })
    return (
        <div className='image-list'>
            {IMAGES}
        </div>
    );
};

export default ImageList;