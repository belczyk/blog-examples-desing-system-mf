import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function mount(mountNode, args) {
  ReactDOM.render(<App {...args} />, mountNode);
}

function unmount(mountNode) {
  let res = ReactDOM.unmountComponentAtNode(mountNode);
}

window.recipesPortalMount = mount;
window.recipesPortalUnmount = unmount;