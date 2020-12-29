import React from "react";

const Ratings = ({ value, text }) => {
  return (
    <div>
      <span>
        {/* visit fontawesome to collect the star icon and then grab according to the value passed as props */}
        <i
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        {/* visit fontawesome to collect the star icon and then grab according to the value passed as props */}
        <i
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        {/* visit fontawesome to collect the star icon and then grab according to the value passed as props */}
        <i
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        {/* visit fontawesome to collect the star icon and then grab according to the value passed as props */}
        <i
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        {/* visit fontawesome to collect the star icon and then grab according to the value passed as props */}
        <i
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>

      {/* displays the text passed if not displays empty*/}
      <span>{text && text} reviews</span>
    </div>
  );
};

export default Ratings;
