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
                el.querySelectorAll(`img:nth-of-type(4)`)[0].style.opacity = 0;
                el.querySelectorAll(`img:nth-of-type(1)`)[0].style.opacity = 1;
            }

            else {
                el.querySelectorAll(`img:nth-of-type(${parseInt(this.imageIndex - 1)})`)[0].style.opacity = 0;
                el.querySelectorAll(`img:nth-of-type(${parseInt(this.imageIndex) + 1 == 5 ? 4 : parseInt(this.imageIndex)})`)[0].style.opacity = 1;
            }

            console.log(this.imageIndex)
        })

        this.imageIndex + 1 == 5 ? this.imageIndex = 1 : this.imageIndex++;

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.imageIndex = 1;
    }

    render() {
        return(
            <div className="logo-grid">
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/1100_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/Cornell_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/MountSinai_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/RobinHood_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/BMW_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/Ducati_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/NYCHealth_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/StRegis_logo.svg" />
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/Baruch_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/FIT_logo.svg" />
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/NYCParks_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/USCourt_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/CS_logo_V2.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/JeanGeorges_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/NeighborhoodTrust_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/Vinoly_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/CentralSyn_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/MTA_logo.svg"/>
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/RMHNY_logo.svg" />
                    <img src="https://s3.amazonaws.com/piscatello/ClientLogos_Resized_V2/WB_logo.svg"/>
                </div>    
            </div>
        )
    }
}

export default LogoRow