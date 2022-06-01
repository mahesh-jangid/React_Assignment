import { useState } from "react";
import axios from "axios";

export const FormData = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    address: "",
    married: "",
    department: "",
    salary: "",
    profile_photo: "",
  });

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleData = (e) => {
    let { name, value, checked, type, FileList } = e.target;
    value = type === "checkbox" ? checked : value;
    if (type === "file") {
      setUserData({
        ...userData,
        [name]: URL.createObjectURL(e.target.files[0]),
      });
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new Array();
    formData.push("image", image.raw);

    await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: "Client-ID 1a25c76bc792043",
      },
      body: formData,
    });
    console.log(image);

    console.log(userData);
    axios.post("http://localhost:8080/user", userData);
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
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="auto" />
        ) : (
          <input
            type="file"
            accept="image/png , image/jpeg"
            name="profile_photo"
            onChange={handleData}
          />
        )}

        <input type="submit" value={"UPLOAD"} />
      </form>
    </div>
  );
};
export default FormData;
