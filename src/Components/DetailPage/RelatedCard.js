import React from "react";
import styled from "styled-components";
import { IoPricetagOutline } from "react-icons/io5";
import {
  AiOutlineClockCircle,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const RelatedCard = () => {
  return (
    <Container>
      <Image src="/assets/1.jpeg" />
      <NavLink
        to="/detail"
        style={{
          textDecoration: "none",
        }}
      >
        <Title>Folly words widow one downs few age every</Title>
      </NavLink>
      <Bottom>
        <IconHolder>
          <Icon>
            <AiOutlineClockCircle />
          </Icon>
          <Span>April 24, 2022</Span>
        </IconHolder>
      </Bottom>
    </Container>
  );
};

export default RelatedCard;

const Container = styled.div`
  width: 230px;
  height: 250px;
  background: white;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: height 350ms;
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: black;
`;

const Bottom = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const IconHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.div`
  font-size: 12px;
  margin-left: 8px;
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
