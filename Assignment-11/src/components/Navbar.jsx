import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const Navigate = useNavigate();

  const handleOnclick = (id) => {
    if (id === 1) {
      Navigate("/products/1");
    }
  };
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/products">product</Link>
      <button onClick={() => handleOnclick(1)}>Go to 1</button>
      <button onClick={() => handleOnclick(2)}>Go to 2</button>
    </>
  );
};
