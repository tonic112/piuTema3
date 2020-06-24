import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    const categorie = this.props.categorie;
    return (
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              className="btn btn-default"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <FontAwesomeIcon
                style={{
                  color: "white"
                }}
                icon={faBars}
              />
            </button>
          </div>
          <h5 className="navbar-brand  ">{categorie}</h5>
          <div class="navbar-header" />

          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="https://m982i.csb.app/login">Login</a>
              </li>

              <li>
                <a href="https://m982i.csb.app/register">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
