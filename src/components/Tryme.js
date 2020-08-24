import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default class Tryme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post("http://54.215.227.33:3000/login", this.state, {
        withCredentials: true,
      })
      .then((response) => {
        const holder = response.data;
        if (holder.includes("Successfully")) {
          toast.success("Successfully Logged in");
          this.props.history.push("/");
        } else {
          console.log(response);
          toast.error("Wrong Credentials");
        }
      })
      .catch((err) => {
        console.log("Somethings wrong");
        console.log(err);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            Coffee Name:
            <input
              className="col-xs-4"
              type="text"
              name="username"
              value={username}
              onChange={this.changeHanlder}
            />
          </div>
          <div>
            Number of Expresso Shots:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.changeHanlder}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
