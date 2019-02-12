import React, { Component, Children } from "react";

class SimpleTyper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentWordProgress: "",
        }
        this.currentWordIndex = 0;
        this.currentLetterProgress = 0;
        this.timing = props.timer || 100;
        this.timer = null;
        this.children = this.props.children;
    }

    componentDidMount() {
        this.timer = setInterval(this.writeAndDeleteWord.bind(this), this.timing)
    }

    writeAndDeleteWord() {
        const word = this.children[0].props.children.split('');
        const letter = this.currentLetterProgress;
        this.setState({currentWordProgress: word.splice(0, letter).join('')})
        this.currentLetterProgress++;
    }

    render() {
        return(
            <span>{this.state.currentWordProgress}</span>
        )
    }
    
}

export default SimpleTyper;