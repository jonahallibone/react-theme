import React, { useEffect, useState } from "react";
import "./ScrollCircles.css";

const ScrollCircles = () => {
    const [selectedCircle, setSelectedCircle] = useState("inspiration");
    let isScrolling = null;

    useEffect(() => {
        document.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            document.removeEventListener("scroll", handleScroll, {passive: true})
        }
    }, []);

    const getPercentOfPageScrolled = () => {
        const circles = document.querySelector("#circle-container");
        const containerHeight = circles.offsetHeight;
        const containerScroll = circles.getBoundingClientRect().top;

        if(containerScroll < 0) {
            return (Math.abs(containerScroll) / containerHeight) * 360
        }

        else return 0;
        
    }

    const snapToSection = () => {
        const scrolled = getPercentOfPageScrolled();
        console.log(scrolled);
        if(scrolled > 0 && scrolled < 60) {
            document.querySelector(".idea-section").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }

        else if(scrolled >= 60 && scrolled < 180) {
            document.querySelector(".places-section").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }

        else if(scrolled >= 180 && scrolled <= 240) {
            document.querySelector(".people-section").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    }

    const selectCircles = (scrolled) => { 
        if(scrolled > 0 && scrolled < 60) {
            setSelectedCircle("inspiration");
        }

        else if(scrolled >= 60 && scrolled < 180) {
            setSelectedCircle("ideation");
        }

        else if(scrolled >= 180 && scrolled <= 240) {
            setSelectedCircle("implementation");
        }
    }

    const handleScroll = () => {
        window.clearTimeout( isScrolling );

        const circles = document.querySelector(".circles");
        const words = document.querySelectorAll(".circle span");
    
        const scrolled = getPercentOfPageScrolled();

        selectCircles(scrolled);

        if(scrolled >= 0 && scrolled <= 240) {
            circles.style.transform = `rotate(${scrolled}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${scrolled}deg)`);
        }

        else if(scrolled > 240) {
            circles.style.transform = `rotate(${240}deg)`;
            words.forEach(el => el.style.transform = `rotate(-${240}deg)`);
        }

        isScrolling = setTimeout(snapToSection, 66);
        
    }

    return(
        <div id="circle-container">
            <div className="circles-side">
                <div className="circles">
                    <div className={selectedCircle === "ideation" ? "circle selected-circle" : "circle"}>
                        <span>Ideation</span>
                    </div>
                    <div className={selectedCircle === "implementation" ? "circle selected-circle" : "circle"}>
                        <span>Implementation</span>
                    </div>
                    <div className={selectedCircle === "inspiration" ? "circle selected-circle" : "circle"}>
                        <span>Inspiration</span>
                    </div>
                </div>
            </div>
            <div className="sections">
                <section className="circle-sections idea-section">
                    <h2 className="text-grey reg lighter">
                        The opportunity that motivates the search for creative solutions.
                    </h2>
                </section>
                <section className="circle-sections places-section">
                    <h2 className="text-grey reg lighter">
                        The process of creating, developing, and prototyping ideas.
                    </h2>
                </section>
                <section className="circle-sections people-section">
                    <h2 className="text-grey reg lighter">
                        The path that leads from the design studio to the market.
                    </h2>
                </section>
            </div>
        </div>
    )
}

export default ScrollCircles;