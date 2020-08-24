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
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: "",
      user_password: "",
    };
  }
  changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post("http://54.176.26.55:5000/auth", this.state)
      .then((response) => {
        const holder = response.data;
        if (holder.includes("Welcome")) {
          toast.success("Successfully Logged in");
          this.props.history.push("/");
        } else {
          toast.error("Wrong Credentials");
        }
      })
      .catch((err) => {
        console.log("Somethings wrong");
        console.log(err);
      });
  };

  render() {
    const { user_email, user_password } = this.state;
    return (
      <div style={divStyle}>
        <div
          className="row"
          style={{ width: "65%", display: "inline-block", marginTop: "5%" }}
        >
          <div className="col-md-6 offset-md-3" style={{ marginTop: "3%" }}>
            <span className="anchor" id="formLogin"></span>

            <div className="card card-outline-secondary">
              <div
                className="card-header"
                style={{ backgroundColor: "#CCA483" }}
              >
                <h3 className="mb-0">Login Java User</h3>
              </div>
              <div className="card-body">
                <form
                  className="form"
                  id="loginForm"
                  onSubmit={this.submitHandler}
                >
                  <div className="form-group" id="test_username">
                    Username
                    <input
                      id="test_input"
                      type="text"
                      className="form-control"
                      name="user_email"
                      value={user_email}
                      onChange={this.changeHanlder}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label id="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="user_password"
                      value={user_password}
                      onChange={this.changeHanlder}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-md"
                    id="btnLogin"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
