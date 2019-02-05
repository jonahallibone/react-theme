import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import HoverLink from "../HoverLink/HoverLink";
import { ProjectsContext } from '../../ProjectsContext';


class ProjectContainer extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.root = React.createRef();
        this.state = {
            imageLoaded: false,
            hovered: false
        }

        this.visible = false;

    }
    
    componentWillMount() {
        let downloadingImage = new Image();
        
        downloadingImage.onload = () => {
            this.setState({imageLoaded: true})
        }
        if (this.props.project.hasOwnProperty("acf")) {
            downloadingImage.src = this.props.project.acf.featured_image 
        }
    }

    componentDidMount() {
        // document.addEventListener("scroll", this.checkVisibility, {passive: true});
        this.root.current.addEventListener("mouseenter", this.addHover.bind(this));
        this.root.current.addEventListener("mouseleave", this.removeHover.bind(this) );

        this.checkVisibility();
    }

    addHover() {
        this.setState({"hovered": true});
    }

    removeHover() {
        this.setState({"hovered": false})
    }

    checkVisibility = () => {
        const top = this.root.current.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
        if(top > 0) {
            this.root.current.classList.add("visible")
        }

        else this.root.current.classList.remove("visible")
    }

    componentWillUnmount() {
        // document.removeEventListener("scroll", this.checkVisibility, {passive: true});
        this.root.current.removeEventListener("mouseenter", this.addHover);
        this.root.current.removeEventListener("mouseleave", this.removeHover) ;
    }

    goToLink = () => {
        const { match, location, history } = this.props;
        const isNews = this.props.news || "";
        let link = "";

        if(isNews) {
            link = "/update/test"
        }

        else link = `/work/${this.props.project.slug}`;

        if(document.querySelector("#swipe-slider")) {
            if(!document.querySelector("#swipe-slider").classList.contains("active")) {
                history.push(link)
            }
        }   
        else {
            history.push(link);
        }
    }

    render() {
        const el = this.props.project;
        const isNews = this.props.news || "";
        // console.log(el)
        return(
            <ProjectsContext.Consumer>
            {({ projects }) => (
                <div onMouseUp={this.goToLink} style={{height: "100%"}}>
                    <div className={"project"} ref={this.root}>
                        <div className="image-container gradient">
                            <img src={el.hasOwnProperty("acf") ? el.acf.featured_image : ""} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
                        </div>
                        <div className="project-description">
                            <div className="project-title margin-top-1 text-black" style={isNews ? {fontSize: "1.5rem"} : {}}>
                                <HoverLink hovered={this.state.hovered}>{el.title.rendered}</HoverLink>
                            </div>
                            <div className="project-info text-grey" dangerouslySetInnerHTML={{__html: el.hasOwnProperty("excerpt") ? el.excerpt.rendered : "" }}>
                            </div> 
                        </div>
                        <div className="details">
                            {isNews ? 
                                <span className="text-grey" style={{fontWeight: "500"}}>{el.tagline}</span>
                                :
                                <div></div>
                            }
                            <h5 className="text-red" style={{textTransform: "capitalize"}}>
                                
                                {el._embedded ? el._embedded["wp:term"].map((term, i) => <span key={i}>{term[0].name}</span>): <span>{el.type}</span>}
                            </h5>
                        </div>
                    </div>
                </div>
            )}
            </ProjectsContext.Consumer>
        )
    }
}

export default withRouter(ProjectContainer);