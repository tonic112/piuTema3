import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Formular.css";
import Navbar from "./Navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    console.log("Welcome " + username + "!. Your password is: " + password);
  };

  render() {
    const stilForm = {
      width: "90%",
      padding: "10px",
      margin: "20px auto"
    };
    const stilBut = {
      marginTop: "15px"
    };
    const { username, password } = this.state;
    return (
      <div style={stilForm}>
        <Navbar categorie="Login" />
        <div
          class="shadow"
          style={{ width: "70%", padding: "20px", margin: "30px auto" }}
        >
          <form name="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button style={stilBut} className="btn btn-primary">
                Login
              </button>
            </div>
            <h6
              style={{ width: "100%", marginTop: "10px", textAlign: "center" }}
            >
              Not registered yet? Register now{" "}
            </h6>
            <div className="d-flex justify-content-center">
              <Link style={stilBut} to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
