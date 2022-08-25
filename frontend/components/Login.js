import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitdata = async (e) => {
    e.preventDefault();

    const dataNew = {
      email,
      password,
    };

    const data = await axios.post(`http://localhost:8070/users/login`, dataNew);

    console.log(data);
    if (data.data.token) {
      alert("Welcome !!!");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userRole", data.data.userRole);
      navigate("/add");
    } else {
      alert("Login Error ! pls try again");
    }

    //navigate("/add");
  };
  return (
    <div>
      <div>
        <div>
          <center>
            <div>
              <h2>Login to the system</h2>
            </div>
            <br />
            <br />
            <div>
              <form
                className="form border border-success p-2 mb-2 border-opacity-75"
                style={{ width: "500px" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />

                <input
                  type="password"
                  placeholder="Enter your password"
                  name="passowrd"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />

                <button
                  className="btn btn-success"
                  onClick={(e) => submitdata(e)}
                >
                  Login
                </button>
              </form>
            </div>
            <br />
            <h4>Don't Have an account? Register Below</h4>
            <a href="/register" className="btn btn-primary">
              Register
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}
