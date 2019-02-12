import React, { Component } from 'react';


import './WorkPageHeader.css';
import Icon from 'react-icons-kit';
import {link} from 'react-icons-kit/feather/link';
import {mail} from 'react-icons-kit/feather/mail';
import {linkedin} from 'react-icons-kit/feather/linkedin';
import {share2} from 'react-icons-kit/feather/share2';
import {socialFacebook} from 'react-icons-kit/ionicons/socialFacebook';
import {socialTwitter} from 'react-icons-kit/ionicons/socialTwitter';
import {socialLinkedin} from 'react-icons-kit/ionicons/socialLinkedin';

class WorkPageHeader extends Component {

    constructor(props) {
        super(props);
        const { onClick } = props;
        this.onClick = onClick;
    }

    componentDidMount() {
        setTimeout(() => {
            document.addEventListener("scroll", this.handleScroll)
        }, 400)
    }

    handleScroll = (e) => {
        let title = document.querySelector("#featured-header");
        if(window.scrollY  >= 80) {
            title.classList.add("shrink");
        }
        else title.classList.remove("shrink");
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.handleScroll);
    }


    render() {
        return (
            <section onClick = {this.props.onclick}id="featured-header">
                <div className="title-row">
                    <div className="side">
                        <h1 className="reg project-title">
                            {this.props.projectTitle}
                        </h1>
                    </div>
                    <div className="side social-side" style={{justifyContent: "flex-end"}}>
                        <div className="social-hover" style={{display: "flex"}}>
                            <div className="social-icon" style={{display: "flex"}}>
                                <div style={{color: this.props.isUpdate ? "#000" : "#FFF", marginLeft: "1rem"}}>
                                    <Icon icon={share2} size="22" />
                                </div>
                            </div>
                            <div className="social-list" style={{display: "flex", justifyContent: "flex-end", backgroundColor: this.props.isUpdate ? "#FFF" : ""}}>
                                <div style={{color: this.props.isUpdate ? "#000" : "#FFF"}} className="share-icon">
                                    <Icon icon={socialLinkedin} size="22" />
                                </div>
                                <div style={{color: this.props.isUpdate ? "#000" : "#FFF"}} className="share-icon">
                                    <Icon icon={socialTwitter} size="22" />
                                </div>
                                <div style={{color: this.props.isUpdate ? "#000" : "#FFF"}} className="share-icon">
                                    <Icon icon={socialFacebook} size="22" />
                                </div>
                                <div style={{color: this.props.isUpdate ? "#000" : "#FFF"}} className="share-icon">
                                    <Icon icon={mail} size="21" />
                                </div>  
                                <div style={{color: this.props.isUpdate ? "#000" : "#FFF"}} className="share-icon">
                                    <Icon icon={link} size="19" />     
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