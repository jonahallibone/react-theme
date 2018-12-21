import React, { Component } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
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
const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 200, beforeChildren: true, transition: { default: { duration: 100 } } },
  exit: { opacity: 0 }
});

class App extends Component {

  constructor(props) {
    super(props);

    this.props.history.listen((location, action) => {
      document.querySelector("header").classList.remove("header-overlay--visible");

      document.querySelectorAll(".animate--post-animate").forEach(el => {
        el.classList.remove("animate--post-animate");
      });
    });
  }

  render() {

    const { location } = this.props
    
    return (
      <div className="App">
        <Header></Header>
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route path="/" exact component = {HomePage} key="home"></Route>
              <Route path="/work" exact component = {WorkPage} key="work"></Route>
              <Route path="/work/:type" exact component = {WorkPage} key="workcat"></Route>
              <Route path="/practice" component = {PracticePage} key="practice"></Route>
              <Route path="/expertise" component = {Expterise} key="approach"></Route>
              <Route path="/work/:type/:id" component = {WorkPageSingle} key="worksingle"></Route>
              <Route path="/contact" component = {ContactPage} key="contact"></Route>
              <Route path="/careers" exact component = {Careers} key="careers"></Route>
              <Route path="/update/:id" render={() => <WorkPageSingle isUpdate={true} />} key="update"></Route>
            </Switch>
          </RouteContainer>
        </PoseGroup>
        {/* <Footer></Footer> */}
      </div>
    )
  }
}

export default withRouter(App);
