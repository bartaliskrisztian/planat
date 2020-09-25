import React, { Component } from "react";
import SortBy from "./SortBy";
import Filter from "./Filter";
import SearchText from "./SearchText";
import "../assets/css/FilterContainer.css";

class FilterContainer extends Component {
  render() {
    return (
      <div className="filter-container">
        <SearchText onTextInputChange={this.props.onTextInputChange} />
        <SortBy onSortByOptionChange={this.props.onSortByOptionChange} />
        <Filter />
      </div>
    );
  }
}

export default FilterContainer;
