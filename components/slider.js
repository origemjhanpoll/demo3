import React from "react";
import Slider from "@react-native-community/slider";
import { useSlide } from "../context/slideContex";

export default function () {
  const { slide, setSlide } = useSlide();
  const value = slide;
  return (
    <Slider
      style={{ width: 280, height: 60 }}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="#D3D3D3"
      maximumTrackTintColor="#000000"
      onValueChange={(e) => setSlide(Math.floor(e))}
      value={value}
      onStartShouldSetResponder={(event) => console.log(event)}
    />
  );
}
