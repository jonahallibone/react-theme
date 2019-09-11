import React, { useEffect } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import Slider from "react-slick";
import HoverLink from "../HoverLink/HoverLink";
import LogoRow from '../LogoRow/LogoRow';
import { Helmet } from "react-helmet";
import CSSAnimate from "../CSSAnimate/CSSAnimate";
import ScrollCircles from "../ScrollCircles/ScrollCircles";
import NewPracticeSection from '../NewPracticeSection/NewPracticeSection';


const PracticePage = () => {
	let nodeList = [];

	useEffect(() => {
		nodeList = document.querySelectorAll(".animate-in");
		
		setTimeout(() => document.addEventListener("scroll", animateElements, { passive: true }), 2000);
		animateElements();

		return () => {
			document.removeEventListener("scroll", animateElements, { passive: true });
		}
	});


	const styleBlack = () => {
		document.querySelector("header").classList.remove("white-bg");
		document.querySelector("header").classList.add("black-bg");
	}

	const animateElements = () => {
		nodeList.forEach(el => {
			let top = el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) * .85;
			if (top) {
				el.classList.add(el.dataset.animationClass);
			}
		});
	}

	const settings = {
		className: "",
		dots: false,
		fade: true,
		cssEase: "ease",
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false
	};

	return (
		<div className="page-practice">

			{/* Helmet Config for Page Meta and Title */}

			<Helmet>
				<title>Piscatello Design Centre | Practice</title>
				<meta name="description" content="Whether you’re established or just starting, we can help your organization grow through the power of design." />

				{/* <!-- Twitter Card data --> */}
				<meta name="twitter:card" value="Whether you’re established or just starting, we can help your organization grow through the power of design." />

				{/* <!-- Open Graph data --> */}
				<meta property="og:title" content="Piscatello Design Centre | Practice" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://piscatello.space/practice" />
				<meta property="og:image" content="https://s3.amazonaws.com/piscatello/Josie-Wall_16x9.jpg" />
				<meta property="og:description" content="Whether you’re established or just starting, we can help your organization grow through the power of design." />

			</Helmet>

			<Container style={{ padding: 0 }} fluid={true} className="container">
				<div className="top-text">
					<CSSAnimate key="i" delay="1000">
						<h1 className="reg text-white lighter animate-in" data-animation-class="pop-in">
							Whether you’re established or just starting, we can help your organization grow through the power of design.
            			</h1>
					</CSSAnimate>
				</div>
				<NewPracticeSection />
			</Container>
			<div className="image-container animate-in" style={{ marginTop: "10rem" }}>
				<Container style={{ padding: 0 }} fluid={true} className="container">
					<ScrollCircles />
				</Container>
			</div>
			<div className="image-container animate-in" data-animation-class="pop-in">
				<LogoRow />
			</div>
			<Container style={{ padding: 0 }} fluid={true} className="container">
				<div>
					<h2 className="light text-white reg padding-top-7 padding-btm-5 animate-in" data-animation-class="pop-in">Capabilities</h2>
				</div>
				<div className="text-grey about-section animate-in" data-animation-class="pop-in">
					<p>We have created a singular studio that works across many disciplines in the field of design. Each team member contributes to uncovering the core idea of a project and is responsible for working within their own area of expertise.</p>
				</div>
				<div className="information-grid padding-top-7">
					<div className="info-block animate-in" data-animation-class="pop-in">
						<p className="reg text-white light text-bold">Design Consulting</p>
						<ul className="text-grey service-list">
							<li style={{ marginTop: ".5rem" }}>Design Workshops</li>
							<li>Visitor Journey Mapping</li>
							<li>Persona Development</li>
							<li>Stakeholder Interviews</li>
							<li>Design Thinking Facilitation</li>
							<li>Coaching & Mentoring</li>
							<li>Art Advisory</li>
						</ul>
					</div>
					<div className="info-block animate-in" data-animation-class="pop-in">
						<p className="reg text-white text-bold">Brand Identity</p>
						<ul className="text-grey service-list">
							<li style={{ marginTop: ".5rem" }}>Logomarks</li>
							<li>Identity Systems</li>
							<li>Icon Development</li>
							<li>Brand Identity Guidelines</li>
							<li>Digital Templates</li>
							<li>Launch & Event Production</li>
							<li>Book & Publication Design</li>
						</ul>
					</div>
					<div className="info-block animate-in" data-animation-class="pop-in">
						<p className="reg text-white light text-bold">Digital Experience</p>
						<ul className="text-grey service-list">
							<li style={{ marginTop: ".5rem" }}>Content Strategy</li>
							<li>Visual & Interface Design</li>
							<li>Cross Platform Design</li>
							<li>Content Management Systems</li>
							<li>Full Stack Development</li>
							<li>Content Design & Asset Creation</li>
							<li>SEO Strategies & Social Media</li>
						</ul>
					</div>
					<div className="info-block animate-in" data-animation-class="pop-in">
						<p className="reg text-white light text-bold">Environmental Graphics</p>
						<ul className="text-grey service-list">
							<li style={{ marginTop: ".5rem" }}>Signage Programs</li>
							<li>Branded Environments</li>
							<li>Super Graphics & Fine Art</li>
							<li>Donor Recognition</li>
							<li>Retail Tenant Guidelines</li>
							<li>Exhibit & Retail Signage</li>
							<li>Memorial Graphics</li>
						</ul>
					</div>
				</div>
			</Container>
			<div className="bottom">
				<Container style={{ padding: 0 }} fluid={true} className="container">
					<h2 className="light text-white reg padding-top-7 padding-btm-7 animate-in" data-animation-class="pop-in" style={{ paddingTop: "14rem" }}>Leadership</h2>
					<div className="image-grid-2">
						{/* <div className="image-container sticky display-mobile">
              <img src="https://s3.amazonaws.com/piscatello/Rocco_Portrait_2.jpg" />
            </div> */}
						<div className="image-container">
							<p className="text-grey light animate-in" data-animation-class="pop-in">
								Rocco Piscatello is principal and creative director of Piscatello Design Centre.
								Piscatello is passionate about working with industry leaders to help their businesses grow and thrive.
								He was a former design director at Vignelli Associates prior to founding Piscatello Design Centre.
              <br />
								<br />
								His past and present global clients include the Robin Hood Foundation, New York University, Ronald McDonald House, Hyatt Hotels, Ducati Motors, BMW, Frank Gehry Partners, Guggenheim Museum, Jean-Georges Management, Starwood Hotels and Resorts, Colorforms, United Colors of Benetton, Warner Bros., Metropolitan Transit Authority, Tishman Speyer, and the U.S. General Services Administration.                <br />
								<br />
								Piscatello has been cited for excellence by the leading organizations promoting superiority in design. Included are the American Institute of Graphic Arts and the Society for Experiential Graphic Design. Piscatello is a frequent speaker on design and was selected by Graphic Design USA as a “Person to Watch.”
              <br />
								<br />
								His work is included in the permanent collections of the Denver Art Museum, the Vignelli Center for Design Studies, and the Library of Congress. His book. “Rocco Piscatello: Poster Works for FIT”, was published in 2017.
              </p>
						</div>
						<div></div>
						{/* <div className="image-container sticky">
              <img src="https://s3.amazonaws.com/piscatello/Rocco_Portrait_2.jpg" />
            </div> */}
					</div>
				</Container>
				<div className="" style={{ background: "#111", marginTop: "6rem" }}>
					<Container style={{ padding: 0 }} fluid={true} className="container">
						<h1 className="text-white lighter reg lets-work-together animate-in" data-animation-class="pop-in" style={{ padding: "10.5rem 0 0 0" }}>
							Let's work together.
            </h1>
						<br /><br />
						<h1 className="text-grey lighter reg lets-work-together animate-in" data-animation-class="pop-in" style={{ padding: "0 0 10.5rem 0" }}>
							Email us at <a href="mailto:work@piscatello.com"><HoverLink grey-grey="true">work@piscatello.com</HoverLink></a> or call <a href="tel:12125024734"><HoverLink grey-grey="true">+1 212 502 4734</HoverLink></a> to learn how we can become an extension of your team.
            </h1>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default PracticePage;