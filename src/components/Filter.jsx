import React, { Component } from "react";
import { Range } from "rc-slider";
import Slider from "rc-slider";
import { Toggle } from "react-toggle-component";
import "../assets/css/Filter.css";
import "rc-slider/assets/index.css";

class Filter extends Component {
  state = {
    show: false,
    price_level: [0, 100],
    opened: [0, 24],
    childSafe: false,
  };

  hidePopUp() {
    this.setState({ show: !this.state.show });
  }

  handlePriceSliderChange = (value) => {
    this.setState({ price_level: value });
  };

  handleOpenSliderChange = (value) => {
    this.setState({ opened: value });
  };

  handleToggleChange = () => {
    this.setState({ childSafe: !this.state.childSafe });
  };

  render() {
    const price_level = this.state.price_level;
    const open = this.state.opened;

    return (
      <div className="filter">
        <button className="filter__button " onClick={() => this.hidePopUp()}>
          Filter
          <div
            className={`filter__button__handle ${
              this.state.show ? "open" : ""
            }`}
          ></div>
        </button>
        <div className={`filter__popup ${this.state.show ? "open" : ""}`}>
          <div className="filter__price-holder">
            <p className="filter__name">Price level: </p>
            <Slider
              value={price_level}
              min={1}
              max={5}
              marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }}
              step={4}
              dots={true}
              onChange={this.handlePriceSliderChange}
            />
          </div>
          <div className="filter__opening-hours">
            <p className="filter__name">Opening hours:</p>
            <Range
              min={0}
              max={24}
              value={open}
              marks={{ [open[0]]: open[0] + "h", [open[1]]: [open[1]] + "h" }}
              onChange={this.handleOpenSliderChange}
            />
          </div>
          <div className="filter__child-safe">
            <p className="filter__name">Child safe:</p>
            <Toggle
              name="toggle"
              rightBackgroundColor="black"
              onToggle={this.handleToggleChange}
              disabled={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
