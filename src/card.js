import React from "react";
import ReactStars from "react-stars";

export const ArtistCard = props => {
  const { artist, deleteArtist, onChangeRating } = props;
  console.log(props.rating);
  return (
    <ReactStars
      value={props.rating}
      count={5}
      onChange={newRating => onChangeRating(newRating)}
      size={27}
      color2={"#ffd700"}
    />
  );
};
