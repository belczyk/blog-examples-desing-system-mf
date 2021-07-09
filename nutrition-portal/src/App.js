import React from "react";
import { hot } from "react-hot-loader/root";
import { Button } from "../../design-system/dist/main";
import "../../design-system/dist/main.css";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <Button>
          Nutrition portal{" "}
          {this.props.isStandAlone
            ? "displayed as stand-alone app"
            : "displayed as micro frontend"}
        </Button>
      </div>
    );
  }
}

export default hot(App);
