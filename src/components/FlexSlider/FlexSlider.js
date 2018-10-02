import React, { Component } from 'react';
import './flex-slider.css';

class FlexSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      translateProgress: 0,
      currentSlideIndex: 1,
      slides : []
    }
  }

  componentDidMount = () => {
    this.getChildren();
  }

  getChildren = (children = []) => {

    if(!children.length) {
      children = this.props.children;
    }
    
    var returnedMap = children.map((el,i) => {
      return <div key={i} className="flex-slider--child">{el}</div>
    });

    this.setState({slides: returnedMap})
  }

  resetChildren = () => {
    
  }


  slideSlider = (direction) => {
  

    if(direction === "next") {
      if(this.state.currentSlideIndex === this.props.children.length - 1) {
        this.addSlideToEnd("end")
        this.setState({currentSlideIndex: 0});
      }

      if(this.state.currentSlideIndex === this.props.children.length) {
        this.addSlideToEnd("end")
      }

      this.setState({currentSlideIndex: this.state.currentSlideIndex += 1});
      var progress = this.state.translateProgress;
      this.setState({translateProgress: progress -= 100});
      this.sliderTrack.style.transform = `translateX(${this.state.translateProgress}%)`;
  }

    if(direction === "prev") {
      if(this.state.currentSlideIndex < this.props.children -1) {

      }

      else this.setState({currentSlideIndex: this.state.currentSlideIndex-=1});
      var progress = this.state.translateProgress;
      this.setState({translateProgress: progress += 100});
      this.sliderTrack.style.transform = `translateX(${this.state.translateProgress}%)`;
    }
  }

  componentDidUpdate = () => {
    // this.getChildren();
  }

  addSlideToEnd = (slidePlacement) => {
    if(slidePlacement === "end") {
      // let oldSlides = [...this.props.children];
      // var newSlides = oldSlides.slice(0,1);
      // oldSlides.push(newSlides);
      // this.getChildren(oldSlides);
      let firstSlide = this.sliderTrack.childNodes[0];
      let secondNode = this.sliderTrack.childNodes[1];
      secondNode.style.marginLeft = "100%";
      firstSlide.style.left = "300%";
      firstSlide.style.position = "absolute";
      firstSlide.style.top = 0;

    }
  }

  resetToBeginning = () => {
    let firstSlide = this.sliderTrack.childNodes[0];
    let secondNode = this.sliderTrack.childNodes[1];
    secondNode.style.marginLeft = "0%";
    firstSlide.style.left = "0%";
    firstSlide.style.position = "block";
    firstSlide.style.top = 0;
  }

  render() {
    return (
      <div className="flex-slider-container">
        <div className="flex-slider--track" ref={elem => this.sliderTrack = elem}>
          {this.state.slides}
        </div>
        <div className={"flex-slider--information"}>
          <div className={"side"}>
            <h2>Nomadx</h2>
            <h2>Identifying a new start up.</h2>
          </div>
          <div className={"side text-right"}>
            <h3 className="reg">0{this.state.currentSlideIndex}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FlexSlider;
