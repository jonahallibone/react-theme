import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../home.css';
import './header-styles.css';

class PageHeader extends Component {
    createHeaderMedia = () => {
        if(this.props.imageSrc) {
            return <img src={this.props.imageSrc} alt="" className="header-image"/>
        }

        else if(this.props.videoSrc) {
            return <video src={this.props.videoSrc} autoPlay muted loop></video>
        }
    }

    getHeaderTitle = () => {
        return this.props.headerTitle
    }

    render() {
        return (
            <section className="hero-section img-block">
                <Container fluid={true} className={"container"} style={{padding: 0}}>
                    <Row align="start" nogutter className={"hero-home"}>
                        <Col xs={12} sm={7} md={8} lg={8} >
                            {/* <h1 className="h1-appear text-white">{this.getHeaderTitle()}</h1> */}
                        </Col>
                    </Row>
                </Container>
                {this.createHeaderMedia()}
                {/*  */}
            </section>
        );
    }
}
export default PageHeader;
