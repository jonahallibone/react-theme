import React, { Component } from "react";
import "./UpdatePageSingle.css";
import { Container } from "react-grid-system";
import WorkPageHeader from "../WorkPageHeader/WorkPageHeader";
import { withProjectsContext } from "../../ProjectsContext";
import {Link} from "react-router-dom";

import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";


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

        const index = updates.findIndex(update => update.slug === match.params.id) + 1;

        const related = index < updates.length - 2 ? [updates[index+1], updates[index+2]] : [updates[0], updates[1]]
        if(!updates.length) return(<div></div>);

        const update = updates.filter(update => update.slug === match.params.id)[0];
        const options = {day: 'numeric', year: 'numeric', month: 'long', };
        

        return(
            <div className="update-page-single">
                <Container fluid={true} className="container" style={{padding: 0}}> 
                    <div className="update-title">
                        <h1 className="reg lighter">{update.title.rendered}</h1>
                    </div>                   
                    <section className="update-content-row padding-top-7">
                        <div className="content-flex">
                            <p className="light text-grey" dangerouslySetInnerHTML={{__html: update.content.rendered}} />
                        </div>
                        <div className="update-share-info">
                            <a href={`https://www.facebook.com/sharer/sharer.php?${document.location}`}><FaFacebookSquare className="facebook" color="#222" size="23px"/></a>
                            <a href={`https://twitter.com/intent/tweet?text=${"a"}&source=webclient`}><FaTwitter className="twitter" color="#222" size="23px"/></a>
                            <FaLinkedin className="linkedin" color="#222" size="23px"/>
                        </div>
                        <div className="update-bottom-info">
                            <div className="profile-image">
                                <img src="https://joeschmoe.io/api/local/jon" />
                            </div>
                            <div className="author-info">
                                <p>Rocco Piscatello</p>
                                <h5 className="light text-grey">Principal</h5>
                            </div>
                        </div>
                    </section>
                </Container>
                <div className="update-page-bottom">
                    <div className="container">                    
                        <h1 className="reg lighter text-white">Next Update</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default withProjectsContext(UpdatePageSingle);