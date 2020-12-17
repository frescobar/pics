import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

export default function ImageList({ images }) {
  const imageList = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className='image-list'>{imageList}</div>;
}
