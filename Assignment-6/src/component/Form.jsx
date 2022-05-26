import { useState } from "react";
import axios from "axios";

export const FormData = ({ handleShow, handleContent }) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    address: "",
    married: "",
    department: "",
    salary: "",
  });

  const handleData = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios.post("http://localhost:8080/user", userData);

    handleContent();
    handleShow();
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userData.name}
          name="name"
          placeholder="Enter your name"
          onChange={handleData}
        />
        <br />
        <input
          type="text"
          value={userData.age}
          name="age"
          placeholder="Enter your age"
          onChange={handleData}
        />
        <br />
        <textarea
          name="address"
          value={userData.address}
          cols="30"
          rows="10"
          placeholder="Enter your address"
          onChange={handleData}
        ></textarea>
        <br />

        <label htmlFor="">Department</label>

        <select
          name="department"
          id=""
          defaultValue={userData.department}
          onChange={handleData}
        >
          <option value="">--select--</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Bussiness">Bussiness</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Graphic Designer">Graphic Designer</option>
        </select>
        <br />

        <input
          type="text"
          name="salary"
          value={userData.salary}
          placeholder="Salary"
          onChange={handleData}
        />
        <br />

        <input
          type="checkbox"
          name="married"
          id=""
          checked={userData.married}
          onChange={handleData}
        />
        <label htmlFor=""> Married</label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default FormData;
