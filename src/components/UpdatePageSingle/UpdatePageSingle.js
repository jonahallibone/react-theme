import React, { Component } from "react";
import "./UpdatePageSingle.css";
import { Container } from "react-grid-system";
import WorkPageHeader from "../WorkPageHeader/WorkPageHeader";
import { withProjectsContext } from "../../ProjectsContext";

class UpdatePageSingle extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        document.querySelector("header").classList.remove("black-bg");
        document.querySelector("header").classList.add("white-bg");
    }

    render() {
        const {updates, match} = this.props;
        if(!updates.length) return(<div></div>);

        const update = updates.filter(update => update.slug === match.params.id)[0];
        
        console.log(update);

        return(
            <div className="update-page-single">
                <WorkPageHeader projectTitle={update.title.rendered} isUpdate={true}></WorkPageHeader>
                <Container fluid={true} className="container" style={{padding: 0}}>                    
                    <h2 className="text-grey light update-description">
                       By {update._embedded.author[0].name}
                    </h2>
                    <section className="update-content padding-top-3">
                        <div className="side">
                            <p className="light" dangerouslySetInnerHTML={{__html: update.content.rendered}} />
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

export default withProjectsContext(UpdatePageSingle);