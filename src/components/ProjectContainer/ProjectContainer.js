import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectContainer extends Component {

    constructor(props) {
        super(props);
        this.root = React.createRef();
        this.state = {
            visible: false
        }
    }
    
    componentWillMount() {
    }

    componentDidMount() {
        document.addEventListener("scroll", this.checkVisibility)
        this.checkVisibility();
    }

    checkVisibility = () => {
        const top = this.root.current.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
        if(top > 0) {
            this.setState({"visible": true})
        }

        else this.setState({"visible": false})
    }

    isVisible() {
        if(this.state.visible) return "visible";
        else return "";
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.checkVisibility);
    }

    render() {
        const el = this.props.project;
        return(
            <Link to="/work/category/test">
                <div className={"project " + this.isVisible()} ref={this.root}>
                    <div className="image-container">
                        <img src={el.thumbnail} />
                    </div>
                    <div className="project-description">
                        <div className="project-title margin-top-1 text-black">
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