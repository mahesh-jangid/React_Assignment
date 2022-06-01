import React, { useContext } from "react";
// import Switch from "react-switch";
import styled from "styled-components";
import "../index.css";

import { ThemeContext } from "../context/ThemeContext";

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="button-switch">
      <input
        type="checkbox"
        id="switch-orange"
        className="switch"
        onChange={toggleTheme}
      />
      <label htmlFor="switch-orange" className="lbl-off">
        Light
      </label>
      <label htmlFor="switch-orange" className="lbl-on">
        Dark
      </label>
    </div>

    // ***** issues with react-switch in vite ****
    // <Switch
    //   onChange={toggleTheme}
    //   checked={isDarkTheme}
    //   handleDiameter={20}
    //   checkedIcon={<Icon></Icon>}
    //   onColor="#191970"
    //   uncheckedIcon={<Icon></Icon>}
    //   offColor="#87ceeb"
    // />
  );
};

export default ThemeToggler;
