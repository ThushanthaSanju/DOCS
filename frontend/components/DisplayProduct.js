import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./product.css";

export default function DisplayProduct() {
  const navigate = useNavigate();
  const [request, SetRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/products/")
      .then((res) => {
        SetRequest(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = (id) => {
    let answer = confirm("Are you sure to delete ?");

    if (answer) {
      axios
        .delete(`http://localhost:8070/products/${id}`)
        .then((res) => {
          alert("Product delete successfully !");
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setData = (data) => {
    let { _id, name, description, qty, price } = data;

    localStorage.setItem("Pid", _id);
    localStorage.setItem("Pname", name);
    localStorage.setItem("Pdescription", description);
    localStorage.setItem("Pqty", qty);
    localStorage.setItem("Pprice", price);

    navigate("/updateProduct");
  };

  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {request.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.qty}</td>
            <td>{data.price}</td>
            <td>
              <button onClick={() => setData(data)}>update</button>
              <button onClick={() => deleteProduct(data._id)}>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
