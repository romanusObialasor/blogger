import React from "react";
import { AiOutlineLogout, AiOutlinePlus } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { FaComments, FaStickyNote } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sider = () => {
  return (
    <Container id="side">
      <Create to="/admindash/create/secureID">
        Create blog{" "}
        <span>
          <AiOutlinePlus />
        </span>
      </Create>
      <Navigators>
        <Nav to="/admindash/home/secureID">
          <NavIcon>
            <IoStatsChart />
          </NavIcon>
          <span>Overview</span>
        </Nav>
        <Nav to="/admindash/blogs/secureID">
          <NavIcon>
            <FaStickyNote />
          </NavIcon>
          <span>Blogs</span>
        </Nav>
        <Nav to="/admindash/comments/secureID">
          <NavIcon>
            <FaComments />
          </NavIcon>
          <span>Comments</span>
        </Nav>
        <Nav to="/admindash/notifications/secureID">
          <NavIcon>
            <BsBellFill />
          </NavIcon>
          <span>Notifications</span>
        </Nav>
      </Navigators>
      <SignOut>
        <Nav to="/admin">
          <NavIcon>
            <AiOutlineLogout />
          </NavIcon>
          <span>Sign Out</span>
        </Nav>
      </SignOut>
    </Container>
  );
};

export default Sider;

const Container = styled.div`
  width: 300px;
  height: calc(100vh - 71px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 350ms;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Create = styled(NavLink)`
  color: #78909c;
  text-decoration: none;
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: #00a573;
  box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2px;
    margin-top: 2px;
  }
`;

const Navigators = styled.div`
  margin-top: 60px;
  flex: 0.9;
`;

const Nav = styled(NavLink)`
  cursor: pointer;
  width: 270px;
  padding: 18px 0;
  display: flex;
  align-items: center;
  transition: all 350ms;
  border-radius: 5px;
  color: #78909c;
  text-decoration: none;
  :hover {
    background: #eceff1;
    color: #00a573;
  }
  span {
    margin-left: 20px;
    /* font-size: 17px; */
  }
`;

const NavIcon = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const SignOut = styled.div``;
