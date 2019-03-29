import React, { Component } from "react";

import "./Filter.css";
import { WorkContext, Pages } from "../WorkPage/Pages";
import HoverLink from "../HoverLink/HoverLink";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            selectedFilter: "featured",
            showTop: false,
        }
        
        this.lastScrollY = null;
    }

    componentDidMount = () => {
    
    }

    toggleShowFilter = () => {
        let filterFlex = document.querySelector(".filter-text");


        if(filterFlex.getBoundingClientRect().top <= 75 && this.state.showTop === false) {
            this.setState({showTop: true});
            filterFlex.classList.add("scrolled")
        }

        else if(filterFlex.getBoundingClientRect().top > 75) {
            this.setState({showTop: false});
            filterFlex.classList.remove("up")
            filterFlex.classList.remove("scrolled")
        }

        else if(this.state.showTop) {
            // console.log(window.scrollY >= this.lastScrollY)
            if(window.scrollY >= this.lastScrollY) {
                filterFlex.classList.add("up");
            }

            else filterFlex.classList.remove("up")
        }

        

        this.lastScrollY = window.scrollY;
    }

    listFilters = (setFilter) => {
        let delay = 0;
        return Object.keys(Pages).map((el, i) => {
            delay += 100;
            return (
                <div 
                    className={this.state.selectedFilter == el.toLowerCase() ? "selected filter" : "filter"} 
                    key={i} 
                    style={{transitionDelay: `${delay}ms`}} 
                    onClick={() => { this.setFilterState(setFilter, el) }}
                >
                        <HoverLink>{el}</HoverLink>
                </div>
            )
        })
    }

    setFilterState = (setFilter, el) => {
        setFilter(el.toLowerCase());
        document.querySelector("#work-list");
        this.setState({"selectedFilter": el})
    }

    componentWillUnmount = () => {
        document.removeEventListener("scroll", this.toggleShowFilter, {passive: true})
    }

    render() {
        return(
            <WorkContext.Consumer>
                {({ filter, setFilter}) => (
                    <span className="light filter-text padding-btm-lg" style={{display: "flex", whiteSpace: "nowrap"}}>
                        <span className="showing-text">Showing – &nbsp;</span>
                        <div className="filter-flex">
                            <div className="selected-filter">{filter.title}</div>
                            {this.listFilters(setFilter)}
                        </div>
                    </span>
                )}
            </WorkContext.Consumer>
        )
    }   
}

export default Filter;