import React, { Component } from "react";
import "./UpdatePageSingle.css";
import { Container } from "react-grid-system";
import WorkPageHeader from "../WorkPageHeader/WorkPageHeader";

class UpdatePageSingle extends Component {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {

    }

    render() {
        return(
            <div className="update-page-single">
                <WorkPageHeader projectTitle={"Test Post"} isUpdate={this.props.isUpdate}></WorkPageHeader>
                <Container fluid={true} className="container" style={{padding: 0}}>                    
                    <h3 className="text-red reg text-bold padding-top-175">07 January 2019</h3>
                    <h3 className="text-grey reg light padding-top-175 update-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque tincidunt imperdiet augue, eget semper magna 
                        ultricies in. Phasellus non laoreet neque. Aenean a turpis 
                        porttitor, tempus arcu sed, bibendum neque. Sed id purus et 
                        sem dignissim maximus. Integer ut est vitae nisl vehicula 
                        dapibus. 
                    </h3>
                    <section className="update-content padding-top-5">
                        <div className="side">
                            <h2 className="light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt imperdiet augue, eget semper magna ultricies in. Phasellus non laoreet neque. Aenean a turpis porttitor, tempus arcu sed, bibendum neque. Sed id purus et sem dignissim maximus. Integer ut est vitae nisl vehicula dapibus. Cras mattis aliquam pretium. Fusce nulla metus, ultrices non rutrum eu, vehicula nec nisi. Nulla magna diam, consequat ac dui ac, interdum tristique tellus. Maecenas luctus risus arcu, sed vehicula mauris condimentum id. Sed rhoncus, enim sed interdum viverra, orci orci placerat ipsum, nec tristique felis purus vel est.

Donec fermentum erat quis libero molestie, sit amet pulvinar diam dapibus. Nunc fringilla enim lectus, varius faucibus turpis ullamcorper sit amet. Curabitur ultricies dui enim, sit amet mattis eros iaculis quis. Proin id euismod eros. Nunc tempor pretium purus, in pulvinar ex sagittis nec. Aenean in sem convallis, dictum elit nec, pellentesque justo. Duis velit neque, consequat at rhoncus eget, luctus eget augue. Duis fringilla sed nunc id sagittis. Quisque ex ex, rhoncus et efficitur ultricies, ultrices eget dui. Sed sollicitudin volutpat venenatis. Donec suscipit sed justo eget laoreet. Quisque vel neque a nunc pharetra laoreet nec sed libero. Duis malesuada nibh vitae tincidunt rutrum. Ut in gravida turpis, non ornare purus. Vestibulum a gravida libero.
                            </h2>
                        </div>
                        <div className="side">
                            <div className="image-side-single">
                                <img src="https://s3.amazonaws.com/piscatello/VAP_ScherPhoto_sq.jpg" />
                            </div>
                            <div className="image-side-single">
                                <img src="https://s3.amazonaws.com/piscatello/VAP_RockPhoto_sq.jpg" />
                            </div>
                            <div className="image-side-single">
                                <img src="https://s3.amazonaws.com/piscatello/VAP_PostcardsGrey_square.jpg" />
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        );
    }
}

export default UpdatePageSingle;