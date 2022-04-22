import React from "react";

export default function ExperienceInfo({ companies }) {
  return (
    <div className="healthcare">
      <div className="row1  mb-5">
        {companies.map((lists) => {
          return (
            <div key={lists.img} className="item item-click wow fadeInRight">
              <img src={lists.img} alt="..." />
              <h6 className="mt-2">{lists.name}</h6>
              <p>{lists.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
