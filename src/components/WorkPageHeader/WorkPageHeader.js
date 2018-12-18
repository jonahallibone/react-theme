import React, { Component } from 'react';


import './WorkPageHeader.css';

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
            <section onclick = {this.props.onclick}id="featured-header" className={this.props.isUpdate === true ? "bg-dark-grey" : ""}>
                <div className="title-row">
                    <div className="side">
                        <h3 className="reg text-black project-title">{this.props.projectTitle}</h3><br/>
                        {/* <h5 className="text-black light">Web Development / Design &bull; Identity</h5> */}
                    </div>
                    <div className="side" style={{justifyContent: "flex-end"}}>
                        {/* <Button button-md arrow className="black-red center text-bold">Start a Project</Button> */}
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkPageHeader;