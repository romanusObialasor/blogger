import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import topic from "../../data.json";

const Header = () => {
  const [data, setData] = useState("");

  // const getData = () => {
  // topic.forEach((e) => {
  //   if (e.NumberOfClicks > 100) {
  //     const getTopic = e.topic;
  //     console.log(getTopic);
  //   }
  // });
  // };

  // let counter = 0;

  // setInterval(() => {
  //   counter++;
  // }, [1000]);

  // console.log("this is counter", counter);

  // useEffect(() => {}, []);

  const getData = () => {
    let counter = 0;

    setInterval(() => {
      if (counter < topic.length - 1) {
        counter++;
        const getTopic = topic[counter].topic;
        setData(getTopic);
      } else {
        counter = 0;
      }
    }, 5000);
  };

  // window.onload = getData;

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <NavLink
        to="/"
        style={{
          width: "20%",
          height: "70%",
        }}
      >
        <Image src="/assets/logo.png" />
      </NavLink>
      <Box>
        <BoxLeft>
          <DotHolder>
            <DotShadow />
            <Dot />
          </DotHolder>
          <Trending>Trending here</Trending>
          <RightIcon>
            <MdOutlineKeyboardArrowRight />
          </RightIcon>
          <Text id="text">{data}</Text>
        </BoxLeft>
        <BoxRight>
          <Arrow>
            <MdOutlineKeyboardArrowLeft />
          </Arrow>
          <Arrow>
            <MdOutlineKeyboardArrowRight />
          </Arrow>
        </BoxRight>
      </Box>
      <Search
        onClick={() => {
          document.getElementById("search").style.height = "100vh";
          document.getElementById("cancel").style.transform = "rotate(0deg)";
        }}
      >
        <FiSearch />
      </Search>
      <SearchSecreen id="search">
        <Cancle
          id="cancel"
          onClick={() => {
            document.getElementById("search").style.height = "0";
            document.getElementById("cancel").style.transform =
              "rotate(180deg)";
          }}
        >
          <AiOutlineClose />
        </Cancle>
        <SearchBar>
          <SearchInput placeholder="Search" />
          <Icon
            onClick={() => {
              document.getElementById("search").style.height = "0";
            }}
          >
            <FiSearch />
          </Icon>
        </SearchBar>
      </SearchSecreen>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  flex: 1;
  height: 75px;
  background: #c1193f;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  height: 100%;
  cursor: pointer;
`;

const Box = styled.div`
  width: 60%;
  height: 60%;
  background: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  width: 20%;
  text-align: center;
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

const BoxLeft = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
`;

const BoxRight = styled.div`
  display: flex;
  margin-right: 25px;
`;

const DotHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DotShadow = styled.div`
  background: #c1193f;
  border-radius: 100%;
  position: absolute;
  animation: blink infinite 1.2s linear forwards;
  transition: all 350ms;
  opacity: 0;
  height: 0;
  width: 0;
  @keyframes blink {
    100% {
      opacity: 0.2;
      height: 20px;
      width: 20px;
    }
  }
`;

const Dot = styled.div`
  background: #c1193f;
  height: 6px;
  width: 6px;
  z-index: 1;
  border-radius: 100%;
`;

const Trending = styled.div`
  margin-left: 20px;
  color: #c1193f;
  font-size: 15px;
`;

const RightIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  color: #c1193f;
`;

const Text = styled.div`
  margin-left: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
`;

const Arrow = styled.div`
  background: #ebebeb;
  display: flex;
  align-items: center;
  padding: 4px 2px;
  margin-left: 10px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: #c1193f;
  }
`;

const SearchSecreen = styled.div`
  position: fixed;
  height: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  backdrop-filter: blur(1px);
  transition: height 350ms;
  overflow: hidden;
`;

const SearchBar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid white;
  padding: 10px;
`;

const SearchInput = styled.input`
  flex: 0.7;
  font-size: 30px;
  background: transparent;
  border: none;
  outline: none;
  color: white;
`;

const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Cancle = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 30px;
  cursor: pointer;
  transition: all 100ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const SearchSecreen = styled.div``

// const SearchSecreen = styled.div``

// const SearchSecreen = styled.div``

// const SearchSecreen = styled.div``

// const SearchSecreen = styled.div``
