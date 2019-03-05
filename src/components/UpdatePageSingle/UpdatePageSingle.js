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
        const options = {day: 'numeric', year: 'numeric', month: 'long', };
        

        return(
            <div className="update-page-single">
                <WorkPageHeader projectTitle={update.title.rendered} isUpdate={true}></WorkPageHeader>
                <Container fluid={true} className="container" style={{padding: 0}}>                    
                    <h2 className="text-grey light update-description padding-top-175">
                        Posted by <span className="text-grey">{update._embedded.author[0].name}</span> on <span className="text-grey">{new Date(update.date).toLocaleDateString('en-US', options)}</span>
                    </h2>
                    <section className="update-content padding-top-3">
                        <div className="side">
                            <div className="image-side-single">
                                <img src={update.acf.featured_image} />
                            </div>
                        </div>
                    </section>
                    <section className="update-content-row padding-top-3">
                        <div className="content-flex">
                            <p className="light text-grey" dangerouslySetInnerHTML={{__html: update.content.rendered}} />
                        </div>
                        <div className="content-flex-social">
                            <p>Sidebar Area</p>
                        </div>
                    </section>
                </Container>
            </div>
        );
    }
}

export default withProjectsContext(UpdatePageSingle);