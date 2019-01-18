import React, { Component } from "react";


import "./CSSAnimate.css";

class CSSAnimate extends Component {
    constructor(props){
        super(props);

        this.state = {
            enterExit: "exit"
        }

        this.timeout = null;
    }

    componentDidMount() {
        const { delay } = this.props || 0;

        this.timeout = setTimeout(() => this.setState({enterExit: "enter"}), delay);

    }

    getClasses() {
        return 
    }

    getChildren() {
        const {children} = this.props;

        let stagger = this.props.stagger || 200;
        let i = 0;


        
        return React.Children.map(children, (child, i) => {
            return <div style={{transitionDelay: `${i * stagger}ms`}} className={"cssanimation translate-opacity " + this.state.enterExit}>{child}</div>
        })
    }

    // componentWillReceiveProps(newProps) {
    //     if(!newProps.mounted) {
    //         this.setState({enterExit: "exit"})
    //     }
    // }

    componentWillUnmount() {
        clearTimeout(this.timeout);

        // this.setState({enterExit: "exit"})
    }


    render() {
        return(
            <div className="">
                {this.getChildren()}
            </div>
        )
    }
}

export default CSSAnimate;