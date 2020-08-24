import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import img3 from "../img/img_6.jpg";

const divStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
};

export default class Createcofee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffee_name: "",
      shots_of_espresso: "",
      container: "",
      total_calories: "",
      contains_milk: "",
      price: "",
    };
  }

  changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("http://54.176.26.55:5000/coffee/", this.state)
      .then((response) => {
        console.log(response);
        toast.success("Coffee Successfully Created");
        this.props.history.push("/coffee");
      })
      .catch((err) => {
        console.log("Somethings wrong");
        console.log(err);
      });
  };

  render() {
    const {
      coffee_name,
      shots_of_espresso,
      container,
      total_calories,
      contains_milk,
      price,
    } = this.state;
    return (
      <div style={divStyle}>
        <div
          className="card card-outline-secondary"
          style={{ width: "50%", display: "inline-block", marginTop: "3%" }}
        >
          <div className="card-header" style={{ backgroundColor: "#CCA483" }}>
            <h3 className="mb-0">Coffee Creator</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.submitHandler}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Coffee name
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="coffee_name"
                    value={coffee_name}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Shots of Espresso
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="shots_of_espresso"
                    value={shots_of_espresso}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Type of Container
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="container"
                    value={container}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Total Calories
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="total_calories"
                    value={total_calories}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Contains Milk
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    className="form-control"
                    name="contains_milk"
                    value={contains_milk}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Price $
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="price"
                    value={price}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    style={{ display: "inline-block", width: "50%" }}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
