import React, { Component } from 'react';
import Header from './components/Header/Header';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

import HomePage from './components/HomePage/HomePage';
import PracticePage from './components/PracticePage/PracticePage';
import AboutPage from './components/AboutPage/AboutPage';
import WorkPage from './components/WorkPage/WorkPage';
import Footer from './components/Footer/Footer';
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
            timeout={{enter: 500, exit: 300}}>
            <Switch location={location}>
              <Route path="/" exact component = {HomePage}></Route>
              <Route path="/work" exact component = {WorkPage}></Route>
              <Route path="/practice" exact component = {PracticePage}></Route>
              <Route path="/about" exact component = {AboutPage}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(App);
