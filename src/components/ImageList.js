import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <ImageCard
        key={image.id}
        id={`${image.id}`}
        image={image}
        onlyFavorite={props.onlyFavorite}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
