import React, { Component } from "react"; // je bien importe le React.Component
import FullName from "./profile/FullName";
import ProfilPhoto from "./profile/ProfilPhoto";
import Address from "./profile/Address";
import "./index.css"
class Main extends Component {
  // même chose "class Main extends React.Component"
  render() {
    return (
      <div className="clmain">
        <ProfilPhoto />
        <hr />
        <FullName />
        <hr />
        <Address />
      </div>
    );
  }
}
export default Main;
