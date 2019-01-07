import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'

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
            imageLoaded: false
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
        document.addEventListener("scroll", this.checkVisibility, {passive: true})
        this.checkVisibility();
    }

    checkVisibility = () => {
        const top = this.root.current.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
        if(top > 0) {
            this.root.current.classList.add("visible")
        }

        else this.root.current.classList.remove("visible")
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.checkVisibility, {passive: true});
    }

    goToLink = () => {
        const { match, location, history } = this.props;
        const isNews = this.props.news || "";
        let link = "";

        if(isNews) {
            link = "/update/test"
        }

        else link = "/work/category/test"

        history.push(link)
    }

    render() {
        const el = this.props.project;
        const isNews = this.props.news || "";

        return(
            <div onClick={this.goToLink}>
                <div className={"project"} ref={this.root}>
                    <div className="image-container gradient">
                        <img src={el.thumbnail} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
                    </div>
                    <div className="project-description">
                        <div className="project-title margin-top-1 text-black" style={isNews ? {fontSize: "1.5rem"} : {}}>
                            {el.title}
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
                        <h5 className="text-red">{el.type}</h5>
                        {isNews ? 
                            <span className="text-grey light" style={{fontWeight: "500"}}>{el.tagline}</span>
                            :
                            <div></div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectContainer);