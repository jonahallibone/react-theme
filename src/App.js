import React, { Component } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import posed, { PoseGroup } from 'react-pose';
 
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
import {ProjectsContext} from "./ProjectsContext";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      transitioning: false,
      projects: []
    }

    this.props.history.listen((location, action) => {
      document.querySelector("header").classList.remove("header-overlay--visible");

      document.querySelectorAll(".animate--post-animate").forEach(el => {
        el.classList.remove("animate--post-animate");
      });
    });

    /* Hydrate interface with projects async */

    this.getProjects = async () => {
      const response = await fetch("https://api.piscatello.space/wp-json/wp/v2/project?_embed&per_page=99")
      const json = await response.json();

      this.setState(state => ({
        projects: json
      }));
    }

    this.getProjects();
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
    });
  }

  // Hook into react router v4

  // componentDidUpdate(prevProps) {
  //   let { pathname } = this.props.location;
  //   if(pathname !== prevProps.location.pathname) {
  //     this.onRouteChanged(pathname)
  //   }
  // }

  onRouteChanged(pathname) {
    console.log("Route change!!", pathname);
    this.setState({transitioning: true});
    setTimeout(() => {
      this.setState({transitioning: false});
    }, 2000)
  }


  render() {

    const { location } = this.props
    
    return (
      <div className="App">
        <Header></Header>
          <ProjectsContext.Provider value={this.state}>
          <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={{ enter: 2000, exit: 400}}>
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
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer></Footer>
          </ProjectsContext.Provider>

        <div className={this.state.transitioning ? "transition-curtain visible" : "transition-curtain"}></div>
      </div>
    )
  }
}

export default withRouter(App);
