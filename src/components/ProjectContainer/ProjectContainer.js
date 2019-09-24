import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import HoverLink from "../HoverLink/HoverLink";
import { ProjectsContext } from '../../ProjectsContext';


class ProjectContainer extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.root = React.createRef();
        this.state = {
            imageLoaded: false,
            hovered: false
        }

        this.videoPlayer = React.createRef();

        this.rAF = undefined;
        this.ticking = false;
        this.last_known_scroll_position = 0;

        this.visible = false;

    }

    componentDidMount() {
        let downloadingImage = new Image();
        
        downloadingImage.onload = () => {
            this.setState({imageLoaded: true})
        }
        if (this.props.project.hasOwnProperty("acf")) {
            downloadingImage.src = this.props.project.acf.featured_image 
        }

        this.root.current.addEventListener("mouseenter", this.addHover.bind(this));
        this.root.current.addEventListener("mouseleave", this.removeHover.bind(this));
        setTimeout(() => {
            this.checkVisibility();
            document.addEventListener("scroll", this.handleScroll, {passive: true});
        }, 2000);    
        
        
        setTimeout(() => this.handleScroll(), 1000);

    }
    
    handleScroll = () => {
        this.last_known_scroll_position = window.scrollY;

        if (!this.ticking) {
            this.rAF = window.requestAnimationFrame(() => {
                this.checkVisibility();
                this.ticking = false;
            });

            this.ticking = true;
        }
    }

    addHover() {
        this.setState({"hovered": true});
    }

    removeHover() {
        this.setState({"hovered": false})
    }

    checkVisibility = (firstrun = false) => {
        const top = this.root.current.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) * .666;
        const bottom = this.root.current.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight);
        
        if((top) > 0 || this.props.index < 2) {
            this.root.current.classList.add("visible")
            document.removeEventListener("scroll", this.handleScroll, {passive: true});
        }

        else if(bottom) {
            // this.root.current.classList.remove("visible")
        }
    }



    componentWillUnmount() {
        // document.removeEventListener("scroll", this.checkVisibility, {passive: true});
        this.root.current.removeEventListener("mouseenter", this.addHover);
        this.root.current.removeEventListener("mouseleave", this.removeHover);
    }

    goToLink = () => {
        const { match, location, history } = this.props;
        const isNews = this.props.news || "";
        let link = "";

        if(isNews) {
            link = `/update/${this.props.project.slug}`;
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

    componentWillUnmount() {
        window.cancelAnimationFrame(this.rAF);
        document.removeEventListener("scroll", this.handleScroll, {passive: true})
    }

    getThumbnail(filter, el) {
        const str = el.acf.featured_image;

        if(filter == "Brand Identity" && el.acf.is_this_a_brand_identity_project) {
            if(el.acf.is_brand_identity_thumbnail_a_video) {
                return (
                    <video ref={this.videoPlayer} autoPlay={false} muted loop playsInline={true} controls={false} style={{width: "100%"}}>
                        <source src={el.acf.brand_identity_thumbnail} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }

            return <img src={el.hasOwnProperty("acf") ? el.acf.brand_identity_thumbnail : ""} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
        }
        
        else if(filter == "Digital Design" && el.acf.is_this_a_digital_design_project) {
            if(el.acf.is_digital_design_thumbnail_a_video) {
                return (
                    <video ref={this.videoPlayer} autoPlay={false} muted loop playsInline={true} controls={false} style={{width: "100%"}}>
                        <source src={el.acf.digital_design_thumbnail} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }

            return <img src={el.hasOwnProperty("acf") ? el.acf.digital_design_thumbnail : ""} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
        }

        else if(filter == "Environmental Graphics" && el.acf.is_this_an_environmental_design_project) {
            if(el.acf.is_environmental_design_thumbnail_a_video) {
                return (
                    <video ref={this.videoPlayer} autoPlay={false} muted loop playsInline={true} controls={false} style={{width: "100%"}}>
                        <source src={el.acf.environment_design_project} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }

            return <img src={el.hasOwnProperty("acf") ? el.acf.environment_design_project : ""} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
        }
        // Just a video on the work page
        
        else if(str.length && str.includes(".mp4")) {
            return (
                <video ref={this.videoPlayer} autoPlay={false} muted loop poster={el.acf.video_poster} playsInline={true} controls={false} style={{width: "100%"}}>
                    <source src={el.acf.featured_image} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )        
        }

        else {
            return <img src={el.hasOwnProperty("acf") ? el.acf.featured_image : ""} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
        }
    }

    handleHover = event => {
        if(this.videoPlayer.current) {
            this.videoPlayer.current.play()
        }
    }

    handleLeave = event => {
        if(this.videoPlayer.current) {
            this.videoPlayer.current.pause();
            this.videoPlayer.current.currentTime = 0;
        }
    }

    render() {
        const el = this.props.project;
        const isNews = this.props.news || "";
        const {filter} = this.props;

        return(
            <div onMouseUp={this.goToLink} style={{height: "100%"}} onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
                <div className={"project"} ref={this.root}>
                    <div className="image-container gradient">
                        {
                            this.getThumbnail(filter, el)

                        }
                    </div>
                    <div className="project-description">
                        <div className="project-title margin-top-1 text-black" style={isNews ? {fontSize: "1.5rem"} : {}}>
                            <HoverLink hovered={this.state.hovered}>{el.title.rendered}</HoverLink>
                        </div>
                        {isNews ?
                            <div className="project-info text-grey" dangerouslySetInnerHTML={{__html: el.hasOwnProperty("excerpt") ? el.excerpt.rendered : "" }} />                            :
                            <div className="project-info text-grey" dangerouslySetInnerHTML={{__html: el.hasOwnProperty("excerpt") ? el.excerpt.rendered : "" }} />
                        }
                    </div>
                    <div className="details">
                        {isNews ? 
                            <span className="text-grey" style={{fontWeight: "500"}}>{el.tagline}</span>
                            :
                            <div></div>
                        }
                        <h5 className="text-red light" style={{textTransform: "capitalize"}}>
                            
                            {el._embedded ? el._embedded["wp:term"][0].map((term, i) => <span key={i}>{i !== 0 ? ", " : ""}{term.name}</span>): <span>{el.type}</span>}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectContainer);