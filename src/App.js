import React from "react";
import "./App.css";
import Home from "./components/Home";
import Coffee from "./components/Coffee";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Createcofee from "./components/Createcofee";
import Footer from "./components/Footer";
import Updatecoffee from "./components/Updatecoffee";
import Delete from "./components/Delete";
import { ToastContainer } from "react-toastify";
import Tryme from "./components/Tryme";
import Getuser from "./components/Getuser";
// import Getusers from "./components/Getuser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/coffee" component={Coffee} />
        <Route path="/delete" component={Delete} />
        <Route exact path="/create" component={Createcofee} />
        <Route path="/update" component={Updatecoffee} />
        <Route path="/tryme" component={Tryme} />
        <Route path="/getuser" component={Getuser} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
