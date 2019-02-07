import React, { Component } from "react";

import "./Filter.css";
import { WorkContext, Pages } from "../WorkPage/Pages";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            selectedFilter: "all"
        }
    }

    listFilters = (setFilter) => {
        let delay = 0;
        return Object.keys(Pages).map((el, i) => {
            delay += 100;
            console.log(el.toLowerCase, this.state.filter);
            return (
                <div 
                    className={this.state.selectedFilter == el.toLowerCase() ? "selected filter" : "filter"} 
                    key={i} 
                    style={{transitionDelay: `${delay}ms`}} 
                    onClick={() => { this.setFilterState(setFilter, el) }}
                >
                        {el}
                </div>
            )
        })
    }

    setFilterState = (setFilter, el) => {
        setFilter(el.toLowerCase());
        this.setState({"selectedFilter": el})
    }

    render() {
        return(
            <WorkContext.Consumer>
                {({ filter, setFilter}) => (
                    <div className="filter-flex">
                        <div className="selected-filter">{filter.title}</div>
                        {this.listFilters(setFilter)}
                    </div>
                )}
            </WorkContext.Consumer>
        )
    }   
}

export default Filter;