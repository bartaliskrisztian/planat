import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import PropTypes from "prop-types";

class MapContainer extends Component {
  render() {
    const { center, radius, markers } = this.props;

    return (
      <Map center={center} zoom={12 - radius / 10000}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {radius && <Circle center={center} radius={radius} color="#5c9489" />}
        {markers &&
          markers.map((elem, index) => (
            <Marker key={index} position={elem.geometry.location}>
              <Popup>{elem.name}</Popup>
            </Marker>
          ))}
      </Map>
    );
  }
}

MapContainer.propTypes = {
  center: PropTypes.array.isRequired,
  radius: PropTypes.number.isRequired,
  markers: PropTypes.array.isRequired,
};

export default MapContainer;
