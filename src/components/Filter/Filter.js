import React, { Component } from "react";

import "./Filter.css";

class Filter extends Component {
    constructor(props) {
        super(props);

         this.filters = [
            "Brand",
            "Digital Design",
            "Environmental Graphics"
        ]
    }

    listFilters() {
        return this.filters.map((el, i) => {
            return (
                <div className="filter" key={i}>{el}</div>
            )
        })
    }

    render() {
        return(
            <div className="filter-flex"><div className="filter">{this.props.selectedFilter || "All"}</div>{this.listFilters()}</div>
        )
    }   
}

export default Filter;