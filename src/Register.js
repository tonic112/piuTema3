import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Formular.css";
import Navbar from "./Navbar";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      }
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { user } = this.state;

    console.log("Your register details are:");
    console.log("First name = " + user.firstName);
    console.log("Last name = " + user.lastName);
    console.log("Username = " + user.username);
    console.log("Password = " + user.password);
  };

  render() {
    const stilForm = {
      width: "90%",
      padding: "20px",
      margin: "30px auto"
    };
    const stilBut = {
      marginTop: "15px"
    };

    const { user } = this.state;
    return (
      <div style={stilForm}>
        <Navbar
          categorie="Register"
          style={{ width: "60%", padding: "30px", margin: "30px auto" }}
        />
        <div class="shadow" style={stilForm}>
          <form name="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={user.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={user.lastName}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={user.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button style={stilBut} className="btn btn-primary">
                Register
              </button>
            </div>
            <h6
              style={{ width: "100%", marginTop: "10px", textAlign: "center" }}
            >
              Not registered yet? Register now{" "}
            </h6>
            <div className="d-flex justify-content-center">
              <Link style={stilBut} to="/login" className="btn btn-primary">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
