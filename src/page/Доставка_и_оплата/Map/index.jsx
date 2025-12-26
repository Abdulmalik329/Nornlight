import React from "react";
import { Kart } from "./Map.styled.js";
import Karta_img from "../../../assets/svg/Karta_img.svg";

function Map(props) {
  return (
    <Kart>
      <img src={Karta_img} alt="Map" />
    </Kart>
  );
}

export default Map;
