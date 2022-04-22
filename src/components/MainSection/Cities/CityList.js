import React from "react";
import { Cities } from "../../../Data";
import { Link } from "react-router-dom";

export default function CityList() {
  const CityData = Cities;

  return (
    <div className="cities text-center">
      {CityData.map((city) => {
        const { id, cityname } = city;

        return (
          <Link className="city-text mx-1" key={id} to={`${cityname}`}>
            {cityname.toUpperCase()} <span className="vdivide"></span>
          </Link>
        );
      })}
    </div>
  );
}
