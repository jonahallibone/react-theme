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
                <WorkPageHeader projectTitle={"Reflections on Ten Qualities of Design"} isUpdate={true}></WorkPageHeader>
                <Container fluid={true} className="container" style={{padding: 0}}>                    
                    <h2 className="text-grey light update-description">
                       By Rocco Piscatello
                    </h2>
                    <section className="update-content padding-top-3">
                        <div className="side">
                            <h2 className="light">
                            In today’s digital world, the opportunity to design a print poster for the purpose of promoting an event is rare. When the Fashion Institute of Technology approached me to design a poster for their newly formed Visiting Artist Program, I immediately said yes. Their brief was very succinct: create a poster announcing a designer’s lecture, while adhering to strict budgetary constraints.

                            One poster quickly multiplied to two. A dozen years later they accumulated to a collection of twenty-four.

                            Looking back and reflecting on the work, I have identified ten qualities that make the posters enduring.
                            <br/><br/>

                            1– Clarity of Message
                            It is my responsibility to ensure that the message conveyed is clear and meaningful. Type size, style and color are used to highlight the most important information
                            <br/><br/>
                            2– Dramatic Proportion and Scale
                            My work pushes the limit of scale and legibility to create engaging and monumental forms. This attracts attention and inspires interest from my audience.
                            <br/><br/>
                            3– Geometry and Mathematical Proportion
                            The elements and compositions in my work are built from geometry and use mathematical proportions to achieve balance and beauty.
                            <br/><br/>
                            4– Emphasis on Typography
                            I develop custom letterforms to create compositions based upon the lecturer’s initials. This brings originality and uniqueness to each poster.
                            <br/><br/>
                            5– Grid-based Composition
                            Every poster starts with the development of a grid system. I use the grid and an underlying structure to support the typography and bring order to the composition.

                            6– Reduction of Elements
                            I work by subtraction. It is crucial to have a clear understanding of a subject in order to develop a strong idea and know what can be taken away without diminishing the message.
                            <br/><br/>
                            7– Differences within Consistency
                            I challenge myself to create different and changing forms for each poster while still maintaining a consistent visual vocabulary throughout the series. This ensures a memorable identity for the lecture program as a whole.
                            <br/><br/>
                            8– Elements of Surprise
                            When appropriate, I like to incorporate a playful or surprising element into the design. These elements give viewers and unexpected and delightful experience.
                            <br/><br/>
                            9– Pursuit of Excellence
                            From the overall composition to the tiniest typographic detail, I strive to achieve the highest level of excellence. This includes working with quality printers and paper manufacturers.
                            <br/><br/>
                            10– Iterate, Refine, and Repeat
                            <br/><br/>
                            Good design takes time to develop. It’s a process that requires study and reflection. I challenge you to slow down and take the time to create the best design possible.

                            <br/><br/> 
                            Rocco Piscatello’s Reflection was originally published in Poster works for FIT: Publication. No part may be used or reproduced in any manner without the written permission from the author, except in the context of reviews.
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