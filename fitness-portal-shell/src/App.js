import React from "react";
import { hot } from "react-hot-loader/root";
import MicroFrontend from "./MicroFrontend";

class App extends React.Component {
  render() {
    return [
        "nutritionPortal",
        "exercisePortal",
        "mealsPlannerPortal",
        "recipesPortal"
    ].map((name) => (
      <MicroFrontend key={name} name={name}></MicroFrontend>
    ));
  }
}

export default hot(App);