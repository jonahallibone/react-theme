import React, { Component } from 'react';


import './WorkPageHeader.css';
import Icon from 'react-icons-kit';
import {socialFacebook, socialTwitter, socialLinkedin, iosEmail, link, androidShareAlt} from 'react-icons-kit/ionicons'

class WorkPageHeader extends Component {

    constructor(props) {
        super(props);
        const { onClick } = props;
        this.onClick = onClick;
    }

    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = (e) => {
        let title = document.querySelector("#featured-header");

        if(title.getBoundingClientRect().top <=75) {
            title.classList.add("shrink");
        }
        else title.classList.remove("shrink");
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.handleScroll);
    }


    render() {
        return (
            <section onClick = {this.props.onclick}id="featured-header" className={this.props.isUpdate === true ? "bg-dark-grey" : ""}>
                <div className="title-row">
                    <div className="side">
                        <h3 className="reg text-white project-title">{this.props.projectTitle}</h3><br/>
                    </div>
                    <div className="side" style={{justifyContent: "flex-end"}}>
                        <div className="social-hover" style={{display: "flex"}}>
                            <div className="social-icon" style={{display: "flex"}}>
                                <span style={{color: "#FFF", fontSize: "1.15rem", fontWeight: "bold"}}>Share</span>
                                <div style={{color: '#FFF', marginLeft: "1rem"}}>
                                    <Icon icon={androidShareAlt} size="25" />
                                </div>
                            </div>
                            <div className="social-list" style={{display: "flex", justifyContent: "flex-end"}}>
                                <div style={{color: '#FFF'}} className="share-icon">
                                    <Icon icon={socialFacebook} size="25" />
                                </div>
                                <div style={{color: '#FFF'}} className="share-icon">
                                    <Icon icon={socialTwitter} size="25" />
                                </div>
                                <div style={{color: '#FFF'}} className="share-icon">
                                    <Icon icon={socialLinkedin} size="25" />
                                </div>
                                <div style={{color: '#FFF'}} className="share-icon">
                                    <Icon icon={iosEmail} size="25" />
                                </div>  
                                <div style={{color: '#FFF'}} className="share-icon">
                                    <Icon icon={link} size="28" />     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkPageHeader;