import "./App.css";
import { useContext, useState } from "react";
import { AuthContext } from "./context/Auth";
import { Login } from "./component/login";
import { ShowStatus } from "./component/show";

function App() {
  const { isAuth } = useContext(AuthContext);
  const { toggle } = useContext(AuthContext);

  const [content, setContent] = useState("");

  const handleContent = (token) => {
    setContent(token);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          toggle();
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
      {isAuth ? (
        <ShowStatus content={content} />
      ) : (
        <Login handleContent={handleContent} />
      )}
    </div>
  );
}

export default App;
