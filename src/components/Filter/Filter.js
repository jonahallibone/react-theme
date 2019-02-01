import React, { Component } from "react";

import "./Filter.css";
import { WorkContext, Pages } from "../WorkPage/Pages";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            selectedFilter: "All"
        }
    }

    listFilters(selectFilter) {
        let delay = 0;
        return Object.keys(Pages).map((el, i) => {
            delay += 100;
            return (
                <div className="filter" key={i} style={{transitionDelay: `${delay}ms`}} onClick={() => { selectFilter(el.toLowerCase()) }}>{el}</div>
            )
        })
    }

    selectFilter(el) {
        this.setState({ "selectedFilter": el })
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