import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [qty, setQuantity] = useState();
  const [price, setPrice] = useState();

  const AddData = async (e) => {
    e.preventDefault();

    const product = {
      name,
      description,
      qty,
      price,
    };

    await axios
      .post(`http://localhost:8070/products/`, product)
      .then((res) => {
        alert("Product added successfully");
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
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
          <br />

          <label for="lname">Product Description:</label>
          <br />
          <input
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />

          <label for="lname">Product Quantity:</label>
          <br />
          <input type="text" onChange={(e) => setQuantity(e.target.value)} />
          <br />
          <br />

          <label for="lname">Product Price:</label>
          <br />
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
}
