import React, { Component } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import posed, { PoseGroup } from 'react-pose';
import ReactGA from 'react-ga';

import './App.css';

import HomePage from './components/HomePage/HomePage';
import PracticePage from './components/PracticePage/PracticePage';
import AboutPage from './components/AboutPage/AboutPage';
import WorkPage from './components/WorkPage/WorkPage';
import Footer from './components/Footer/Footer';
import WorkPageSingle from './components/WorkPageSingle/WorkPageSingle';
import ContactPage from './components/ContactPage/ContactPage';
import Expterise from './components/Expertise/Expertise';
import Careers from './components/Careers/Careers';
import CareerPageSingle from './components/CareerPageSingle/CareerPageSingle';
import Updates from './components/UpdatesPage/Updates';
import UpdatePageSingle from './components/UpdatePageSingle/UpdatePageSingle';
import Page404 from "./components/404/404.js";
import {ProjectsContext} from "./ProjectsContext";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      updates: [],
      contact_images: [],
      careers: [],
      slider: [],
      practice: [],
      location: ""
    }

    this.props.history.listen((location, action) => {
      ReactGA.pageview(window.location.pathname + window.location.search);

      document.querySelector("header").classList.remove("header-overlay--visible");
      
      // console.log(location);
      
      document.querySelectorAll(".animate--post-animate").forEach(el => {
        el.classList.remove("animate--post-animate");
      });
    });

    /* Hydrate interface with projects async */

    this.getProjects = async () => {
      const response = await fetch("https://api.piscatello.com/wp-json/wp/v2/project?_embed&per_page=99")
      const json = await response.json();

      this.setState(state => ({
        projects: json
      }));
    }

    this.getContactImages = async () => {
      const response = await fetch("https://api.piscatello.com/wp-json/wp/v2/custom-page?include[]=1038");  // 1038 is the ID of the contact-page
      const json = await response.json();

      this.setState(state => ({
        contact_images: json
      }));
    }

    this.getCareers = async () => {
      const response = await fetch("https://api.piscatello.com/wp-json/wp/v2/custom-page?include[]=1056");  // 1038 is the ID of the contact-page
      const json = await response.json();

      this.setState(state => ({
        careers: json
      }));
    }

    this.getSlider = async () => {
      const response = await fetch("https://api.piscatello.com/wp-json/wp/v2/custom-page?include[]=1069");  // 1038 is the ID of the contact-page
      const json = await response.json();

      this.setState(state => ({
        slider: json
      }));
    }

    this.getPractice = async () => {
      const response = await fetch("https://api.piscatello.com/wp-json/wp/v2/custom-page?include[]=909");  // 1038 is the ID of the contact-page
      const json = await response.json();

      this.setState(state => ({
        practice: json
      }));
    }

    this.getUpdates = async () => {
      const response = await fetch("https://api.piscatello.com/wp-json/wp/v2/update?_embed&per_page=99&filter[orderby]=date&order=desc")
      const json = await response.json();

      this.setState(state => ({
        ...state,
        updates: json.sort((a, b) => new Date(a.acf.date) - new Date(b.acf.date))
      }));
    }

    this.getProjects();
    this.getSlider();
    this.getPractice();
    this.getUpdates();
    this.getContactImages();
    this.getCareers();
  }



  componentDidMount() {
    this.initializeReactGA();
  }

  initializeReactGA() {
    ReactGA.initialize('UA-90138439-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  // Hook into react router v4

  componentDidUpdate(prevProps) {
    let { pathname } = this.props.location;

    if(pathname !== prevProps.location.pathname) {
      this.onRouteChanged(pathname)
    }
  }

  onRouteChanged(pathname) {
    // console.log("Route change!!", pathname);
  }

  scrollTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  render() {

    const { location } = this.props
    
    return (
      <div className="App">
        <Header location={this.props.location}></Header>
          <ProjectsContext.Provider value={this.state}>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={{ enter: 900, exit: 900}} appear={true}>
                <Switch location={location}>
                  <Route path="/" exact component = {HomePage}></Route>
                  <Route path="/practice" component = {PracticePage}></Route>
                  <Route path="/expertise" component = {Expterise}></Route>
                  <Route path="/work/:id" component = {WorkPageSingle}></Route>
                  <Route path="/contact" component = {ContactPage}></Route>
                  <Route path="/careers" exact component = {Careers}></Route>
                  <Route path="/careers/:id" exact component = {CareerPageSingle}></Route>
                  <Route path="/update/:id" component = {UpdatePageSingle}></Route>
                  <Route path="/work" exact component = {WorkPage} key="work"></Route>
                  <Route path="/update" exact component = {Updates}></Route>
                  <Route component={Page404} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer></Footer>
          </ProjectsContext.Provider>
      </div>
    )
  }
}

export default withRouter(App);
