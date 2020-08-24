import React, { Component } from "react";
import "../homecss.css";
import img4 from "../img/img_4.jpg";
import img2 from "../img/img_2.jpg";
import img5 from "../img/img_5.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url(${img2})`,
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="display-4">Coffee is Life</h3>
                  <p className="lead">Coffee makes my heart pound faster.</p>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(${img5})`,
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="display-4">Need a break?</h3>
                  <p className="lead">Coffee is here for you.</p>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(${img4})`,
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="display-4">Coffee helps</h3>
                  <p className="lead">"Wanna grab some coffee?"</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>

        <section className="py-5">
          <div className="container">
            <h1 className="font-weight-light">Know more about Coffee</h1>
            <p className="lead">
              Legend has it that 9th-century goat herders noticed the effect
              caffeine had on their goats, who appeared to "dance" after eating
              the fruit of the Coffea plant. A local monk then made a drink with
              the produce and found that it kept him awake at night, thus the
              original cup of coffee was born.
              <br></br>
              <a href="https://www.goodhousekeeping.com/health/diet-nutrition/a30303/facts-about-coffee/">
                Link to Article
              </a>
              !
            </p>
          </div>
        </section>
      </div>
    );
  }
}
