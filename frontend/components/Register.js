import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userRole, setUserRole] = useState();

  const handleChange = (e) => {
    setUserRole(e.target.value);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      userRole,
    };

    await axios
      .post(`http://localhost:8070/users/`, data)
      .then((res) => {
        alert("User is Register successfully !");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center className="mt-5">
        <h3>Register</h3>
        <form
          onSubmit={registerUser}
          class="border border-success p-2 mb-2 border-opacity-75"
          style={{ width: "500px" }}
        >
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            required
          >
            <option selected>user Role</option>
            <option value="customer">customer</option>
            <option value="staff">staff</option>
          </select>

          <button type="submit" className="btn btn-success mt-3 mb-3">
            {" "}
            REGISTER{" "}
          </button>
        </form>
      </center>
    </div>
  );
}
