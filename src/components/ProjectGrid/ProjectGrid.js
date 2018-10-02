import React, { Component } from 'react';

import '../../App.css';

class ProjectGrid extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <section className="homepage-bottom padded">
                <div className="container padded">
                    <h2 className="reg">Featured Work</h2>
                </div>
                <div className="piscatello-slider__container container">
                    <div className="piscatello-slider__cell--container">
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectGrid;
