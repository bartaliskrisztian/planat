import React, { useState, useEffect } from "react";
import CardsComponent from "./CardsComponent";
import RecommendationsCarousel from "./RecommendationsCarousel";
import { apiRequest } from "../utils";
import "../assets/css/Recommendations.css";
import ImagePlaceHolder from "../assets/images/image-placeholder.svg";

function Recommendations(props) {
  const [places, setPlaces] = useState([]);
  const [activities] = useState([
    "museum",
    "spa",
    "amusement_park",
    "zoo",
    "park",
  ]);

  useEffect(() => {
    let result = [];
    let url = `textsearch/json?query=${
      activities[Math.floor(Math.random() * activities.length)]
    }+in+${props.location}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`;

    apiRequest(url).then(
      (response) => {
        response.results.slice(0, 4).forEach((item, i) => {
          result.push(item);
        });
        setPlaces(result);
      },
      (reject) => console.log(reject)
    );
  }, [props.location, activities]);

  const url =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=450&max&photoreference=";

  return (
    <div className="recommendations">
      <h6 className="recommendations__title">Recommendations</h6>
      <div className="recommendations__cards">
        {places.map((elem, i) => (
          <CardsComponent
            key={i}
            name={elem.name}
            img={
              elem.photos
                ? `${url}${elem.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
                : ImagePlaceHolder
            }
            types={elem.types}
            place_id={elem.place_id}
            address={elem.formatted_address}
            price_level={elem.price_level}
            open={elem.opening_hours}
            lat={elem.geometry.location.lat}
            lng={elem.geometry.location.lng}
          />
        ))}
      </div>
      <RecommendationsCarousel
        url={`textsearch/json?query=${
          activities[Math.floor(Math.random() * activities.length)]
        }+in+${props.location}&key=${
          process.env.REACT_APP_GOOGLE_PLACES_API_KEY
        }`}
      />
    </div>
  );
}

export default Recommendations;
