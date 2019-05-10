import React from "react";
import { Link } from "react-router-dom";

import "./404.css";
import HoverLink from "../HoverLink/HoverLink";
const Page404 = () => {
    return(
        <div className="page-404">
            <h1 className="text-white reg">404</h1>
            <h3 className="text-white reg light">
            Seems like this content isn't available. 
            Check out some of our <HoverLink><Link to="/work">Work</Link></HoverLink>.</h3>
        </div>
    )
}

export default Page404;