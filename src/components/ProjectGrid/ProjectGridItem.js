import React, { Component } from 'react';
import '../../App.css';
import '../../home.css';

class ProjectGridItem extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        return (
            <div className="piscatello-slider__cell">
                <div className="cell-contents">
                    <div className="cell-image img-block">
                        <img src="http://piscatello.com/wp-content/uploads/2018/04/MG_Letterhead2_Grey.jpg" alt=""/>
                    </div>
                    <div className="cell-information">
                        <h2 className="padding-btm-sm">Mitchell Giurgola</h2>
                        <h4 className="text-grey">Refresh the firm image while still celebrating the legacy of the original founders.</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectGridItem;
