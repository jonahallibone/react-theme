import React, { Component } from 'react';
import ClampLines from 'react-clamp-lines';
import ProgressiveImage from 'react-progressive-image';

import './ProjectThumbnail.css';

class ProjectThumbnail extends Component {
    constructor(props) {
        super(props)
    }

    getThumbClass = () => {
        if(this.props.size = 4) {
            return 'of-4'
        }
    }

    render() {
        return(
            <div className="item project-item">
                <ProgressiveImage src="https://s3.amazonaws.com/piscatello/Large/Nomadx-BC.jpg" placeholder="tiny-image.jpg">
                    {(src, loading) => (
                        <div className={ loading ? "img-container" : "img-container loaded" }>
                            <img src={src} alt="an image" />
                        </div>
                    )}
                </ProgressiveImage>
                <div className="contents">
                    <h3 className="light text-black"><strong>Douglass Winthrop</strong><br/>New York</h3>
                    <ClampLines
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit."}
                    lines="2"
                    ellipsis="..."
                    buttons={false}
                    className="subtext text-red" />
                </div>
            </div>
        )
    }
}

export default ProjectThumbnail;