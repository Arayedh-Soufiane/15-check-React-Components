// a functional component that returns a Photo of your profile

import React from "react";
import Prof from "../profile/Prof.jpg";
import "../index.css";

export default function ProfilPhoto() {
  return <img className="climg" src={Prof} />;
}
