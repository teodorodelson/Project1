import React, { Component } from "react";
import img3 from "../img/img_3.jpg";

const divStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
};
export default class Coffee extends Component {
  state = {
    coffees: [],
  };

  componentDidMount() {
    fetch("http://54.176.26.55:5000/coffee")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          coffees: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div style={divStyle}>
        <div style={{ width: "80%", display: "inline-block" }}>
          <h1 style={{ marginBottom: "2%", marginTop: "2%" }}>Coffee List</h1>
          <table
            id="dtBasicExample"
            className="table table-light table-bordered table-md"
            cellSpacing="0"
            width="100%"
          >
            <thead className="thead-dark">
              <tr>
                <th className="th-lg">Coffe Id</th>
                <th className="th-lg">Coffee Name</th>
                <th className="th-lg">Shots of Espresso</th>
                <th className="th-lg">Container</th>
                <th className="th-lg">Calories</th>
                <th className="th-lg">Prize</th>
              </tr>
            </thead>
            <tbody>
              {this.state.coffees.map((coffee) => {
                return (
                  <tr key={coffee.id}>
                    <td>{coffee.id}</td>
                    <td>{coffee.coffee_name}</td>
                    <td>{coffee.shots_of_espresso}</td>
                    <td>{coffee.container}</td>
                    <td>{coffee.total_calories}</td>
                    <td>{coffee.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
