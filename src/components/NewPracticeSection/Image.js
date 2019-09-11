import React from "react";
import { withController } from 'react-scroll-parallax';

const Image = ({src, parallaxController, ...rest}) => {
    const handleLoad = () => {
        // updates cached values after image dimensions have loaded
        parallaxController.update();
    };
 
    return  (
        <img src={src} onLoad={handleLoad} {...rest} />
    )
}

export default withController(Image);