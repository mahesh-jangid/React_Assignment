import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [prod, setProd] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/data/${id}`).then((r) => {
        setProd(r.data);
      });
    }
  }, [id]);
  return (
    <>
      <div>
        product ID: {id}
        <div>Product : {prod.name}</div>
        <div>Price : {prod.price}</div>
      </div>
    </>
  );
};
