import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectContainer extends Component {

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

    render() {
        const el = this.props.project;
        const isNews = this.props.news || "";
        let link = "";

        if(isNews) {
            link = "/update/test"
        }

        else link = "/work/category/test"

        return(

            <Link to={link}>
                <div className={"project"} ref={this.root}>
                    <div className="image-container gradient">
                        <img src={el.thumbnail} style={this.state.imageLoaded ? {opacity: 1} : {opacity: 0}} alt=""/>
                    </div>
                    <div className="project-description">
                        <div className="project-title margin-top-1 text-black" style={isNews ? {fontSize: "1.5rem"} : {}}>
                            {el.title}
                        </div>
                    </div>
                    <div className="details">
                        <h5 className="text-red">{el.type}</h5>
                        <span className="text-grey">{el.tagline}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProjectContainer;