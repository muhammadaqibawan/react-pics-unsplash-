import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard.js';
import { after } from 'lodash';

const ImageList = ({ images, allImagesLoaded }) => {

    const onLastImageCallTheFunc = after(images.length, () => {
        allImagesLoaded()
      });
    const IMAGES = images.map(image =>{
        return <ImageCard image={image} onLastImageCallTheFunc={onLastImageCallTheFunc} imagesCount={images.length} key={image.id} /> 
    })
    return (
        <div className='image-list'>
            {IMAGES}
        </div>
    );
};

export default ImageList;