import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { ShowStatus } from "./show";

export const Login = ({ handleContent }) => {
  const [cred, setCred] = useState({ email: "", password: "" });

  const { toggle } = useContext(AuthContext);

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/login", cred).then((res) => {
      handleContent(res.data.token);
      setCred({ email: "", password: "" });
      toggle();
    });
    handleContent(null);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={cred.email}
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={cred.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};
