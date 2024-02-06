import React from "react";

const Stars = ({ Stars }) => {
  const starsArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="stars fs-5 d-flex ">
      {starsArray.map((_, index) => (
        <p key={index} className={index < Stars ? "coloredStars" : ""}>
          &#9733;
        </p>
      ))}
    </div>
  );
};

export default Stars;
