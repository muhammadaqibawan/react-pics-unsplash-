import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard.js';
import { after } from 'lodash';
import { InView } from 'react-intersection-observer';

const ImageList = ({ images, allImagesLoaded, onIntersection }) => {

    const onLastImageCallTheFunc = after(images.length, () => {
        allImagesLoaded()
      });
    const IMAGES = images.map((image, index) =>{
        if( images.length === index +1){
            return (<InView key={image.id} as="div" onChange={(inView, entry) => onIntersetion(inView, entry) }>
                {({ inView, ref, entry }) => (
                <div ref={ref}> <ImageCard image={image} onLastImageCallTheFunc={onLastImageCallTheFunc} imagesCount={images.length} key={image.id} /> </div>
            )}
            </InView>)
        }
        return <ImageCard image={image} onLastImageCallTheFunc={onLastImageCallTheFunc} imagesCount={images.length} key={image.id} /> 
    })

    const onIntersetion = (inView, entry)=>{
        onIntersection({inView, entry})
    }

    return (
        <div className='image-list'>
            {IMAGES}
        </div>
    );
};

export default ImageList;