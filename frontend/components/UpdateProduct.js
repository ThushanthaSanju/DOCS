import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./product.css";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [qty, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    setId(localStorage.getItem("Pid"));
    setName(localStorage.getItem("Pname"));
    setDescription(localStorage.getItem("Pdescription"));
    setQuantity(localStorage.getItem("Pqty"));
    setPrice(localStorage.getItem("Pprice"));
  }, []);

  const AddData = async (e) => {
    e.preventDefault();

    const product = {
      name,
      description,
      qty,
      price,
    };

    await axios
      .put(`http://localhost:8070/products/${id}`, product)
      .then((res) => {
        alert("Successfully Updated");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <center>
        <form onSubmit={AddData}>
          <label for="fname">Product Name:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <br />

          <label for="lname">Product Description:</label>
          <br />
          <input
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <br />

          <label for="lname">Product Quantity:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setQuantity(e.target.value)}
            value={qty}
          />
          <br />
          <br />

          <label for="lname">Product Price:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <br />
          <br />

          <input type="submit" value="update" />
        </form>
      </center>
    </div>
  );
}
