import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from '../HomePage/HomePage';
import PracticePage from '../PracticePage/PracticePage';
import AboutPage from '../AboutPage/AboutPage';
import WorkPage from '../WorkPage/WorkPage';

function Container({location}) {
  return (
    <Wrapper>
       <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{enter: 300, exit: 300}}>
            <Switch location={location}>
              <Route path="/" exact component ={HomePage}></Route>
              <Route path="/work" component ={WorkPage}></Route>
              <Route path="/practice" component ={PracticePage}></Route>
              <Route path="/about" component ={AboutPage}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = `div`

export default withRouter(Container);