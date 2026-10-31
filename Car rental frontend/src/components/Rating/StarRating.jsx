import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({rating,rentalSummary}) => {
  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };

  const stars = Array(5).fill(0)

  return (
    <div className="flex gap-2">
      {stars.map((_, index) => {
        return (
          <FontAwesomeIcon
            icon={faStar}
            key={index}
            className={`${rentalSummary ? "text-xs" : "text-sm"}`}
            
            color={rating > index? colors.orange : colors.grey}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
