import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImagePlaceHolder from "../assets/images/image-placeholder.svg";

class SightListElement extends Component {
  render() {
    const { image, name, place_id, lat, lng, city } = this.props;

    const handleImageError = (e) => {
      e.target.src = ImagePlaceHolder;
    };

    return (
      <div className="sightlist-element">
        <div className="image__holder">
          <img
            className="sightlist-element__image"
            src={image === "" ? ImagePlaceHolder : image}
            alt={name}
            onError={handleImageError}
          />
        </div>
        <div className="sightlist-element__details">
          <h2>{name}</h2>
          <div>{city}</div>
        </div>
        <Link
          target="blank"
          className="button button--more"
          to={`/details?place_id=${place_id}&lat=${lat}&lng=${lng}`}
        >
          Details
        </Link>
      </div>
    );
  }
}

SightListElement.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default SightListElement;
