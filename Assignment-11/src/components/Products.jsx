import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getdata = () => {
      axios.get("http://localhost:8080/data").then((data) => {
        setProduct(data.data);
      });
    };
    getdata();
  }, []);
  return (
    <>
      <div>
        Products
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "60%",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          <Outlet />
          <div>
            {product.map((el) => (
              <div id={el.id}>
                <table style={{ border: "1px solid red", width: "300px" }}>
                  <thead>
                    <td>Product Name</td>
                    <td>Product Price</td>
                    <td>Details</td>
                  </thead>
                  <tbody>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>
                      {" "}
                      <Link to={`/products/${el.id}`}>More Details</Link>
                    </td>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
