import React, { useEffect, useState, useCallback } from "react";
import zenscroll from 'zenscroll';

import "./ScrollCircles.css";

const ScrollCircles = () => {
    const [selectedCircle, setSelectedCircle] = useState("inspiration");
    let isMobile = false;
    let isScrolling = null;

    //For mount

    useEffect(() => {
        handleResize();
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
            clearTimeout(isScrolling);
            isScrolling = null;
        }
    }, [handleScroll]);

    //For event listeners
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [handleResize]);

    const toggleEventListeners = () => {
        document.removeEventListener("scroll", handleScroll, {passive: true});
        document.addEventListener("scroll", handleScroll, {passive: true});
    }

    const handleResize = () => {
        const mobileQuery = window.matchMedia("(max-width: 600px)");
        if(mobileQuery.matches) {
            isMobile = true;
        } else {
            isMobile = false;
        }

        // toggleEventListeners();
    }

    const getPercentOfPageScrolled = () => {
        const circles = document.querySelector("#circle-container");
        const containerHeight = circles.offsetHeight || circles.scrollTop;
        const containerScroll = circles.getBoundingClientRect().top;
        
        if(containerScroll < 0) {
            return (Math.abs(containerScroll) / containerHeight) * 480;
        }

        else return 0;
        
    }

    const snapToSection = (scrolled) => {
        // const scrolled = getPercentOfPageScrolled();

        if(scrolled > 60 && scrolled < 180) {
            !isMobile ? zenscroll.to(document.querySelector(".idea-section")) : zenscroll.to(document.querySelector(".idea-section-mobile"));
        }

        else if(scrolled >= 180 && scrolled < 300) {
            !isMobile ? zenscroll.to(document.querySelector(".places-section")) : zenscroll.to(document.querySelector(".places-section-mobile"));
        }

        else if(scrolled >= 300 && scrolled <= 360) {
            !isMobile ? zenscroll.to(document.querySelector(".people-section")) : zenscroll.to(document.querySelector(".people-section-mobile"));
        }
    }

    const selectCircles = (scrolled) => { 
        if(scrolled > 60 && scrolled < 180) {
            setSelectedCircle("inspiration");
        }

        else if(scrolled >= 180 && scrolled < 300) {
            setSelectedCircle("ideation");
        }

        else if(scrolled >= 300 && scrolled <= 360) {
            setSelectedCircle("implementation");
        }

        else if(scrolled >= 360) {
            setSelectedCircle("none");
        }

        else {
            setSelectedCircle("");
        }
    }

    const handleScroll = () => {
        clearTimeout(isScrolling);
        isScrolling = null;

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

        else if(scrolled > 360) {
            circles.style.transform = `rotate(${240}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${240}deg)`);
        }

        else {
            circles.style.transform = `rotate(${0}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${0}deg)`);
        }

        isScrolling = setTimeout(() => snapToSection(scrolled), 66);
        
    }

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
                <section className={`circle-sections main-section ${selectedCircle === "" ? "visible" : ""}`}>
                    <h2 className={selectedCircle === "inspiration" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                    To ensure success for our clients, we consider three driving factors.
                    The people who use the things that we design, the ease of use and overall experience of the ecosystems we create, 
                    and the value of timeless beauty in a refined deliverable.
                    </h2>
                </section>
                <section className={`circle-sections idea-section ${selectedCircle === "inspiration" ? "visible" : ""}`}>
                    <h2 className={selectedCircle === "inspiration" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        <h3 className="text-red reg text-bold">1</h3>
                        <br/>
                        We believe that design can make organizations stronger. 
                        We strive to create intelligent and intuitive work that 
                        inspires loyalty in the people who interact with our clients' brands.                    
                    </h2>
                </section>
                <section className={`circle-sections places-section ${selectedCircle === "ideation" ? "visible" : ""}`}>
                    <h2 className={selectedCircle === "ideation" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        <h3 className="text-red reg text-bold">2</h3>
                        <br/>
                        We guide an organization’s brand across all touchpoints both physical and digital to ensure a meaningful and memorable experience.
                    </h2>
                </section>
                <section className={`circle-sections people-section ${selectedCircle === "implementation" ? "visible" : ""}`}>
                    <h2 className={selectedCircle === "implementation" ? "text-grey reg lighter" : "text-grey reg lighter"}>
                        <h3 className="text-red reg text-bold">3</h3>
                        <br/>
                        We help organization’s bring their brand to life by designing for peoples’ preferences, desires, and values.
                    </h2>
                </section>
            </div>
            <div className="mobile-sections">
                <section className="mobile-section main-section-mobile"></section>
                <section className="mobile-section idea-section-mobile"></section>
                <section className="mobile-section places-section-mobile"></section>
                <section className="mobile-section people-section-mobile"></section>
            </div>
        </div>
    )
}

export default ScrollCircles;