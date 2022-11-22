import React from "react";
import styled from "styled-components";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Container>
      <span>c</span>Explore360 {date}
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #c1193f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  span {
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 0px 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 2px;
    margin-right: 5px;
  }
`;
