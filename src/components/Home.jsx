import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Recommendations from "./Recommendations";
import HeaderImage from "../assets/images/headerimage.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { db } from "../services/firebase";
import "../assets/css/Home.css";

const Home = () => {
  const cities = ["London", "Paris", "Seoul", "Sydney", "Cluj"];

  const [radius, setRadius] = useState(5);
  const [recPlace, setRecPlace] = useState(
    cities[Math.floor(Math.random() * cities.length)]
  );
  const { user, isAuthenticated } = useAuth0();

  let sliderValueChange = (value) => {
    setRadius(value);
  };

  useEffect(() => {
    if (isAuthenticated) {
      db.collection("users")
        .doc(user.sub.split("|")[1])
        .get()
        .then((snapshot) => {
          let data = snapshot.data();
          setRecPlace(
            data.searchHistory[
              Math.floor(Math.random() * data.searchHistory.length)
            ]
          );
        });
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div className="home_page">
        <div className="hero-image">
          <img src={HeaderImage} alt="HeaderImage" />
          <div className="hero-text-wrapper">
            <h1 className="hero-text">PLAN AT</h1>
          </div>
        </div>
        <div className="wrapper">
          <SearchBar radius={radius} onSliderValueChange={sliderValueChange} />
          <Recommendations location={recPlace} />
        </div>
      </div>
    </div>
  );
};
export default Home;
