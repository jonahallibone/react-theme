import React, { Component } from "react";
import "./UpdatePageSingle.css";
import { Container } from "react-grid-system";
import WorkPageHeader from "../WorkPageHeader/WorkPageHeader";
import { withProjectsContext } from "../../ProjectsContext";
import {Link} from "react-router-dom";

class UpdatePageSingle extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        document.querySelector("header").classList.remove("black-bg");
        document.querySelector("header").classList.add("white-bg");
    }

    getSidebar() {
        const { match, updates } = this.props;

        const index = updates.findIndex(update => update.slug === match.params.id) + 1;

        const related = index < updates.length - 2 ? [updates[index+1], updates[index+2]] : [updates[0], updates[1]]

        return related.map((update, index) => {
            return(
                <Link to={`/update/${update.slug}`} className="related-updates text-bold" key={`${update.slug}-${index}`}>
                    <div className="image-container">
                        <img src={update.acf.featured_image}/>
                    </div>
                    <p className="related-title text-black text-bold">{update.title.rendered}</p>
                </Link>
            )
        })
    }

    render() {
        const {updates, match} = this.props;
        if(!updates.length) return(<div></div>);

        const update = updates.filter(update => update.slug === match.params.id)[0];
        const options = {day: 'numeric', year: 'numeric', month: 'long', };
        

        return(
            <div className="update-page-single">
                <div style={{textAlign: "center", width: "50%", margin: "0 auto"}}>
                    <h1 className="reg lighter">{update.title.rendered}</h1>
                </div>
                <Container fluid={true} className="container" style={{padding: 0}}>                    
                    <section className="update-content-row padding-top-7">
                        <div className="content-flex">
                            <p className="light text-grey" dangerouslySetInnerHTML={{__html: update.content.rendered}} />
                        </div>
                    </section>
                </Container>
            </div>
        );
    }
}

export default withProjectsContext(UpdatePageSingle);