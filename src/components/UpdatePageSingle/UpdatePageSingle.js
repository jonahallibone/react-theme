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

        var index = updates.findIndex(update => update.slug === match.params.id) + 1;

        if(index >= updates.length) {
            index = 0;
        }

        if(!updates.length) return(<div></div>);

        const update = updates.filter(update => update.slug === match.params.id)[0];

        var options = { day: 'numeric', month: 'long',  year: 'numeric' };

        return(
            <div className="update-page-single">
                <Container fluid={true} className="container" style={{padding: 0}}> 
                    <div className="update-title">
                        <h1 className="reg lighter">{update.title.rendered}</h1>
                    </div>                   
                    <section className="update-content-row padding-top-7">
                        <div className="content-flex">
                            <div className="sidebar">
                                <div className="update-bottom-info">
                                    <div className="profile-image">
                                        <img src="https://joeschmoe.io/api/local/jon" />
                                    </div>
                                    <div className="author-info">
                                        <p>Rocco Piscatello</p>
                                        <h5 className="light text-grey">Principal</h5>
                                        <h5 className="light text-grey padding-top-1">{new Date(update.date).toLocaleDateString('en-FR', options)}</h5>
                                        <div className="update-share-info padding-top-1">
                                            <a href={`https://www.facebook.com/sharer/sharer.php?${document.location}`}><FaFacebookSquare className="facebook" color="#222" size="23px"/></a>
                                            <a href={`https://twitter.com/intent/tweet?text=${document.location}&source=webclient`}><FaTwitter className="twitter" color="#222" size="23px"/></a>
                                            <FaLinkedin className="linkedin" color="#222" size="23px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="light text-grey" dangerouslySetInnerHTML={{__html: update.content.rendered}} />
                        </div>
                    </section>
                </Container>
                <Link to={`/update/${updates[index].slug}`} className="update-page-bottom">
                    <div className="container">
                        <p className="text-white">Next Update</p>                    
                        <h1 className="reg lighter text-white">{updates[index].title.rendered}</h1>
                    </div>
                    <div className="image-scale" style={{backgroundImage: `url(${updates[index].acf.featured_image}`}}/>
                    <div style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, background: "rgba(0,0,0,0.8)"}}></div>
                </Link>
            </div>
        );
    }
}

export default withProjectsContext(UpdatePageSingle);