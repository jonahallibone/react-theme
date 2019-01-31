import React, { Component } from "react";

import "./Filter.css";

class Filter extends Component {
    constructor(props) {
        super(props);

         this.filters = [
            "Brand Identity",
            "Digital Design",
            "Environmental Graphics"
        ]
    }

    listFilters() {
        let delay = 0;
        return this.filters.map((el, i) => {
            delay += 100;
            return (
                <div className="filter" key={i} style={{transitionDelay: `${delay}ms`}}>{el}</div>
            )
        })
    }

    render() {
        return(
            <div className="filter-flex">
                <div className="selected-filter">Brand Identity</div>
                <div className="filter">{this.props.selectedFilter || "All"}</div>
                {this.listFilters()}
            </div>
        )
    }   
}

export default Filter;