import React, {Component} from "react"
import "./LogoRow.css";

class LogoRow extends Component {

    constructor(props) {
        super(props);

        this.intervalId = null;
        this.currentIndex;
        this.imageIndex = 1;
    }

    componentDidMount() {
        this.intervalId = setInterval(this.interval, 4000);
    }

    interval = () => {
        let imageContainers = document.querySelectorAll(".logo-col");
        imageContainers.forEach((el, i) => {
            el.querySelectorAll("img").forEach(el => el.style.transitionDelay = `${i * 100}ms`)
            if(this.imageIndex == 1) {
                el.querySelectorAll(`img:nth-of-type(5)`)[0].style.opacity = 0;
                el.querySelectorAll(`img:nth-of-type(1)`)[0].style.opacity = 1;
            }

            else {
                el.querySelectorAll(`img:nth-of-type(${parseInt(this.imageIndex - 1)})`)[0].style.opacity = 0;
                el.querySelectorAll(`img:nth-of-type(${parseInt(this.imageIndex) + 1 == 6 ? 5 : parseInt(this.imageIndex)})`)[0].style.opacity = 1;
            }

            console.log(this.imageIndex)
        })

        this.imageIndex + 1 == 6 ? this.imageIndex = 1 : this.imageIndex++;

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.imageIndex = 1;
    }

    render() {
        return(
            <div className="logo-grid">
                <div className="logo-col">
                   <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/RobinHood.svg"/>
                   <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/NYCHealth.svg"/>
                   <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/MountSinai.svg"/>
                   <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/1100.svg"/>
                   <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Guggenheim.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/StRegis.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/CS.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/MTA.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/CentralSyna.svg"/> 
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Beneton.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/JeanGeorges.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/FIT.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/RMHNY.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/UScourt.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Hyatt.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Warner.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/NT.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/NYCParks.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Vinoly.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/NYU.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Baruch.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Mitchell.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Cornell.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/Ducati.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Revised_02.22.19/BMW.svg"/>
                </div>    
            </div>
        )
    }
}

export default LogoRow