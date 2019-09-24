import React, { useEffect, useContext } from 'react';

import './Practice.css';
import { Container } from 'react-grid-system';
import HoverLink from "../HoverLink/HoverLink";
import LogoRow from '../LogoRow/LogoRow';
import CSSAnimate from "../CSSAnimate/CSSAnimate";
import ScrollCircles from "../ScrollCircles/ScrollCircles";
import NewPracticeSection from '../NewPracticeSection/NewPracticeSection';
import { ProjectsContext } from "../../ProjectsContext";


const PracticePage = () => {
	let nodeList = [];
	const { practice } = useContext(ProjectsContext);
	useEffect(() => {
		console.log(practice);
		if(!practice.length) return; 
		nodeList = document.querySelectorAll(".animate-in");
		
		setTimeout(() => document.addEventListener("scroll", animateElements, { passive: true }), 2000);
		animateElements();

		return () => {
			document.removeEventListener("scroll", animateElements, { passive: true });
		}
	}, [practice]);

	const animateElements = () => {
		nodeList.forEach((el) => {
			const top = el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) * .85;
			if (top) {
				el.classList.add(el.dataset.animationClass);
			}
		});
	}

	return (
		<div className="page-practice">
			{!practice.length ? "" :
			<>
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
					<ScrollCircles content={practice} />
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
					<p>{practice[0].acf.capabilities_text}</p>
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
						<div className="image-container">
							<p 
							className="text-grey light animate-in" 
							data-animation-class="pop-in" 
							dangerouslySetInnerHTML={{__html: practice[0].acf.leadership}} />
						</div>
						<div></div>
	
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
			</>
			}
		</div>
);
}

export default PracticePage;