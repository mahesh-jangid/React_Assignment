import React from "react";
import styled from "styled-components";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../App.css";

const Scale = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 40px;
  margin: auto;
  margin-top: 6px;
  background-color: white;
  border: ${(props) => props.theme.colors.border};
  transition: border 0.5s ease;
`;
const Filled = styled.span`
  position: absolute;
  top: -0.5px;
  left: -0.3px;
  width: ${(level) => level.level.ScaleFill};
  height: 6px;
  border-radius: 40px;
  background-color: ${(level) => level.level.bg};
`;
const UserDiv = styled.div`
  width: 87%;
  margin: auto;
  padding: 11px 16px;
  border: ${(props) => props.theme.colors.border};
  transition: border 0.5s ease;
`;

const WrapperDiv = styled.div`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  width: 90%;
  margin: auto;
  padding: 5px 15px;
  margin-top: 0;
  transition: all 0.5s ease;
`;

export const Users = ({ Activeusers }) => {
  console.log(Activeusers);
  return (
    <WrapperDiv className="wrapper">
      {Activeusers.map((user) => (
        <>
          <UserDiv className="UserDiv">
            <div className="User">
              <div className="user_info">
                <img key={user.id} src={user.src} alt="My Pic" />
                <p>{user.name}</p>
              </div>
              {/* <MoreHorizIcon /> */}
            </div>
            <Scale className="scale" key={user.id}>
              <Filled level={user} className="filled"></Filled>
            </Scale>
            <div className="info">
              <p>
                Professional Level
                {user.ProfessionalLevel}
              </p>
              <p className="points">
                Points:
                {user.points}
              </p>
            </div>
          </UserDiv>
        </>
      ))}
    </WrapperDiv>
  );
};
