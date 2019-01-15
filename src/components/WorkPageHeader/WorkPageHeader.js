import React, { Component } from 'react';


import './WorkPageHeader.css';
import Icon from 'react-icons-kit';
import {socialFacebook, socialTwitter, socialLinkedin, iosEmail, link} from 'react-icons-kit/ionicons'

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
                        <h3 className="reg text-black project-title">{this.props.projectTitle}</h3><br/>
                    </div>
                    <div className="side" style={{justifyContent: "flex-end"}}>
                        <div style={{color: '#999'}}>
                            <Icon icon={socialFacebook} size="25" />
                        </div>
                        <div style={{color: '#999'}}>
                            <Icon icon={socialTwitter} size="25" />
                        </div>
                        <div style={{color: '#999'}}>
                            <Icon icon={socialLinkedin} size="25" />
                        </div>
                        <div style={{color: '#999'}}>
                            <Icon icon={iosEmail} size="25" />
                        </div>  
                        <div style={{color: '#999'}}>
                            <Icon icon={link} size="28" />     
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkPageHeader;