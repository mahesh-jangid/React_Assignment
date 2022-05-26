import "./App.css";
import FormData from "./component/Form.jsx";
import ShowTable from "./component/TableShow.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    handleContent();
    return;
  }, [show]);

  const handleShow = () => {
    setShow(!show);
  };

  // async function handleContent() {
  //   const response = await fetch("http://localhost:8080/user");
  //   const data = await response.json();
  //   console.log(data);
  //   setUsers(data);
  // }
  const handleContent = () => {
    axios.get("http://localhost:8080/user").then((res) => {
      setUsers(res.data);
    });
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show Users" : "Create New User"}
      </button>

      {show ? (
        <FormData handleShow={handleShow} handleContent={handleContent} />
      ) : (
        <ShowTable users={users} />
      )}
    </div>
  );
}

export default App;
