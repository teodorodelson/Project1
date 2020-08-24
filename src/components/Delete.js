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
export default class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffee_id: "",
    };
  }
  changeHanlder = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    const urlToPost = `http://54.176.26.55:5000/coffee/${this.state.coffee_id}`;
    axios
      .delete(urlToPost, this.state)
      .then((response) => {
        toast.success(`Coffee ID ${this.state.coffee_id} Deleted`);
        console.log(response);
        this.props.history.push("/coffee");
      })
      .catch((err) => {
        toast.error(`Not Deleted. Something went wrong`);
        console.log("Somethings wrong");
        console.log(err);
      });
  };

  render() {
    const { coffee_id } = this.state;
    return (
      <div style={divStyle}>
        <div
          className="card card-outline-secondary"
          style={{ marginTop: "3%", width: "40%", display: "inline-block" }}
        >
          <div className="card-header" style={{ backgroundColor: "#CCA483" }}>
            <h3 className="mb-0">Delete Coffee :(</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.submitHandler}>
              Coffe ID
              <div className="form-group">
                <input
                  type="text"
                  name="coffee_id"
                  value={coffee_id}
                  onChange={this.changeHanlder}
                />
                <span
                  id="helpResetPasswordEmail"
                  className="form-text small text-muted"
                >
                  Warning upon pressing the delete button the coffe id
                  associated will be deleted.
                </span>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-danger btn-lg">
                  Remove Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
