import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImagePlaceHolder from "../assets/images/image-placeholder.svg";

class CardsComponent extends Component {
  render() {
    const {
      name,
      img,
      types,
      address,
      place_id,
      price_level,
      open,
      lat,
      lng,
    } = this.props;

    const handleImageError = (e) => {
      e.target.src = ImagePlaceHolder;
    };

    var price = "";

    for (var i = 1; i <= price_level; i++) {
      price += "$";
    }

    return (
      <div className="card">
        <a href={img} target="blank" className="card__image-holder">
          <img
            className="card__image"
            src={img}
            alt={name}
            referrerPolicy="no referrer"
            onError={handleImageError}
          ></img>
        </a>
        <div className="card__body">
          <h3 className="card__body__title">{name}</h3>
          <div className="card__body__tag-container ">
            {types.map((tags) => (
              <p className="card__body__tag">{tags}</p>
            ))}
          </div>
          <h6 className="card__body__address">Address: {address}</h6>
          {open !== undefined && (
            <p className="card__body__details">
              {open ? "Open now" : "Closed"}
            </p>
          )}
          {price_level && (
            <p className="card__body__details">Price level: {price}</p>
          )}

          <Link
            className="card__body__btn"
            target="_blank"
            to={`/planat/details?place_id=${place_id}&lat=${lat}&lng=${lng}`}
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }
}

CardsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  address: PropTypes.string,
};

export default CardsComponent;
