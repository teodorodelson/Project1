import React, { Component } from "react";

export default class Getusers extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("http://54.215.227.33:3000/getallAccounts", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }
  // if gusto mo mag search gawa ka new component lagyan mo input tapos palitan mo yang email
  // componentDidMount() {
  //   fetch("http://localhost:5000/getAccountByEmail/then@gmail.com", {
  //     credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         users: data,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div>
        <h3>List Coffee</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Coffe Name</th>
              <th>Shots of Espresso</th>
              <th>Container</th>
              <th>Calories</th>
              <th>Price</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.lname}</td>
                  <td>{user.fname}</td>
                  <td>{user.join_date}</td>
                  <td>{user.contact}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
