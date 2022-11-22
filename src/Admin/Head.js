import React from "react";
import { VscMenu } from "react-icons/vsc";
import styled from "styled-components";

const Head = () => {
  const reveal = () => {
    let side = document.getElementById("side");
    if (side.style.width === "300px") {
      side.style.width = "0";
    } else {
      side.style.width = "300px";
    }
  };

  return (
    <Container>
      <Left>
        <Icon onClick={reveal}>
          <VscMenu />
        </Icon>
        <Logo src="/assets/logo.png" />
      </Left>
      <Right>
        <Image src="/assets/user.jpg" />
        <DetailHolder>
          <Name>Lucky Ofili</Name>
          <Sub>Content Creator</Sub>
        </DetailHolder>
      </Right>
    </Container>
  );
};

export default Head;

const Container = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
`;

const Left = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 25px;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  transition: all 350ms;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.img`
  background: #c1193f;
  height: 50px;
  margin-left: 10px;
  padding: 2px 10px;
  border-radius: 5px;
`;

const Right = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  object-fit: cover;
`;

const DetailHolder = styled.div`
  margin-left: 10px;
`;

const Name = styled.div`
  font-weight: 500;
`;

const Sub = styled.div`
  font-size: 12px;
`;
