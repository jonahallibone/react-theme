import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../Button/Button';


import './WorkPageHeader.css';

class WorkPageHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="featured-header">
                <div className="title-row">
                    <div className="side">
                        <h3 className="reg text-black">Project Title</h3>
                    </div>
                    <div className="side" style={{justifyContent: "flex-end"}}>
                        <Button button-md arrow className="black-red center text-bold">Start a Project</Button>
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkPageHeader;