import React, { useEffect, useState } from "react";
import zenscroll from 'zenscroll';

import "./ScrollCircles.css";

const ScrollCircles = () => {
    const [selectedCircle, setSelectedCircle] = useState("inspiration");
    let isScrolling = null;

    useEffect(() => {
        document.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            clearTimeout(isScrolling);
            isScrolling = null;
            document.removeEventListener("scroll", handleScroll, {passive: true})
        }
    }, []);

    const getPercentOfPageScrolled = () => {
        const circles = document.querySelector("#circle-container");
        const containerHeight = circles.offsetHeight || circles.scrollTop;
        const containerScroll = circles.getBoundingClientRect().top;
        
        if(containerScroll < 0) {
            return (Math.abs(containerScroll) / containerHeight) * 480;
        }

        else return 0;
        
    }

    const snapToSection = () => {
        const scrolled = getPercentOfPageScrolled();

        if(scrolled > 60 && scrolled < 180) {
            zenscroll.to(document.querySelector(".idea-section"));
        }

        else if(scrolled >= 180 && scrolled < 300) {
            zenscroll.to(document.querySelector(".places-section"));
        }

        else if(scrolled >= 300 && scrolled <= 360) {
            zenscroll.to(document.querySelector(".people-section"));
        }
    }

    const selectCircles = (scrolled) => { 
        if(scrolled > 60 && scrolled < 180) {
            setSelectedCircle("inspiration");
        }

        else if(scrolled >= 180 && scrolled < 300) {
            setSelectedCircle("ideation");
        }

        else if(scrolled >= 300) {
            setSelectedCircle("implementation");
        }

        else {
            setSelectedCircle("");
        }
    }

    const handleScroll = () => {
        window.clearTimeout( isScrolling );

        const circles = document.querySelector(".circles");
        const words = document.querySelectorAll(".circle span");
    
        const scrolled = getPercentOfPageScrolled();

        selectCircles(scrolled);
        
        if(scrolled > 0 && scrolled < 360) {
            document.querySelector(".page-practice").style.backgroundColor = "#000";
        }

        else {
            document.querySelector(".page-practice").style.backgroundColor = "#000";
        }

        if(scrolled >= 120 && scrolled <= 360) {
            circles.style.transform = `rotate(${scrolled - 120}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${scrolled - 120}deg)`);
        }

        else if(scrolled > 240) {
            circles.style.transform = `rotate(${240}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${240}deg)`);
        }

        else {
            circles.style.transform = `rotate(${0}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${0}deg)`);
        }

        isScrolling = setTimeout(snapToSection, 66);
        
    }

    const fontSize = "2.15rem";
    return(
        <div id="circle-container">
            <div className="circles-side">
                <div className="circles">
                    <div className={selectedCircle === "ideation" ? "circle selected-circle" : "circle"}>
                        <span>Experience</span>
                    </div>
                    <div className={selectedCircle === "implementation" ? "circle selected-circle" : "circle"}>
                        <span>People</span>
                    </div>
                    <div className={selectedCircle === "inspiration" ? "circle selected-circle" : "circle"}>
                        <span>Design</span>
                    </div>
                </div>
            </div>
            <div className="sections">
                <section className="circle-sections main-section">
                    <h2 style={{fontSize: fontSize}} className={selectedCircle === "inspiration" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        We see these three features most often in our work: design, experience, and people. We use them to ensure success for our clients.
                    </h2>
                </section>
                <section className="circle-sections idea-section">
                    <h2 style={{fontSize: fontSize}} className={selectedCircle === "inspiration" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        <h3 className="text-red reg text-bold">1</h3>
                        <br/>
                        We bring our passion for design to create brands that surprise, delight, and deliver positive emotions.                    
                    </h2>
                </section>
                <section className="circle-sections places-section">
                    <h2 style={{fontSize: fontSize}} className={selectedCircle === "ideation" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        <h3 className="text-red reg text-bold">2</h3>
                        <br/>
                        We guide an organization’s brand across all touchpoints both physical and digital to ensure a meaningful and memorable experience.
                    </h2>
                </section>
                <section className="circle-sections people-section">
                    <h2 style={{fontSize: fontSize}} className={selectedCircle === "implementation" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        <h3 className="text-red reg text-bold">3</h3>
                        <br/>
                        We help organization’s bring their brand to life by designing for peoples’ preferences, desires, and values.
                    </h2>
                </section>
            </div>
        </div>
    )
}

export default ScrollCircles;