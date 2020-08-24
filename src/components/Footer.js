import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "1%" }}>
        <footer className="page-footer font-small special-color-light pt-4 fixed-bottom ">
          <div className="py-4 bg-dark text-white-50" style={{ height: "2%" }}>
            <span style={{ textAlign: "center" }}>Java Coffee @ Copyright</span>
          </div>
        </footer>
      </div>
    );
  }
}
