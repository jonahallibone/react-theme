import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import HoverLink from "../HoverLink/HoverLink";

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

        downloadingImage.src = this.props.project.thumbnail;
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

        else link = "/work/category/test";

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

        return(
            <div onMouseUp={this.goToLink} style={{height: "100%"}}>
                <div className={"project"} ref={this.root}>
                    <div className="image-container gradient">
                        <img src={el.thumbnail} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
                    </div>
                    <div className="project-description">
                        <div className="project-title margin-top-1 text-black" style={isNews ? {fontSize: "1.5rem"} : {}}>
                            <HoverLink hovered={this.state.hovered.toString()}>{el.title}</HoverLink>
                        </div>
                        {!isNews ?
                            <div className="project-info text-grey">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra
                            </div> 
                            :
                            <div></div>
                        }
                        
                    </div>
                    <div className="details">
                        {isNews ? 
                            <span className="text-grey" style={{fontWeight: "500"}}>{el.tagline}</span>
                            :
                            <div></div>
                        }
                        <h5 className="text-red">{el.type}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectContainer);