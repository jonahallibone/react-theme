import React, {Component} from "react"
import "./LogoRow.css";

class LogoRow extends Component {
    render() {
        return(
            <div className="logo-grid">
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/SVG/1100_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/SVG/BMW_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/SVG/NYCParks_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/SVG/Robin+Hood_logo.svg"/>
                </div>    
                <div className="logo-col">
                    <img src="https://s3.amazonaws.com/piscatello/SVG/DucatiMotors_logo.svg"/>
                </div>    
            </div>
        )
    }
}

export default LogoRow