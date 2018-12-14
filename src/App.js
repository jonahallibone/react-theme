import React, { Component } from 'react';
import Header from './components/Header/Header';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Prefetch from 'react-router-prefetch';

import PostStore from "./store";
import './App.css';

import HomePage from './components/HomePage/HomePage';
import PracticePage from './components/PracticePage/PracticePage';
import AboutPage from './components/AboutPage/AboutPage';
import WorkPage from './components/WorkPage/WorkPage';
import Footer from './components/Footer/Footer';
import WorkPageSingle from './components/WorkPageSingle/WorkPageSingle';
import ContactPage from './components/ContactPage/ContactPage';

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
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={"fade"}
            timeout={{enter: 1000, exit: 500}}>
            <Switch location={location}>
              <Route path="/" exact component = {HomePage}></Route>
              <Route path="/work" exact component = {WorkPage}></Route>
              <Route path="/work/:type" exact component = {WorkPage}></Route>
              <Route path="/practice" exact component = {PracticePage}></Route>
              <Route path="/about" exact component = {AboutPage}></Route>
              <Route path="/work/:type/:id" component = {WorkPageSingle}></Route>
              <Route path="/contact" component = {ContactPage}></Route>
              <Route path="/update/:id" render={() => <WorkPageSingle isUpdate={true} />}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(App);
