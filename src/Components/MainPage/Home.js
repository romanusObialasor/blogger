import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import PostsProps from "./PostsProps";
import Footer from "../Footer/Footer";
import JsonData from "../../data.json";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JsonData);
  }, []);

  return (
    <Container>
      <Header />
      <LeftConnect>
        <FaFacebookF cursor="pointer" />
        <FaTwitter cursor="pointer" />
        <FaLinkedin cursor="pointer" />
      </LeftConnect>
      <Wrapper>
        {" "}
        <FilterBar>
          <FilterButton>
            <FilterIcon>
              <GiSettingsKnobs />
            </FilterIcon>
            <span>Filter</span>
          </FilterButton>
          <Nav1>All categories</Nav1>
          <Nav>News</Nav>
          <Nav>Gadget</Nav>
          <Nav>Programming</Nav>
        </FilterBar>
        <Head>All Posts</Head>
        <Posts>
          {data.map((prop) => (
            <PostsProps
              key={prop.id}
              cover={prop.coverPhoto}
              tag={prop.category}
              topic={prop.topic}
              date={prop.datePosted}
              comment={prop.comments.length}
              detail={prop.detail}
            />
          ))}
        </Posts>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftConnect = styled.div`
  width: 30px;
  height: 100px;
  background: #c1193f;
  color: white;
  position: fixed;
  padding: 10px 0;
  left: 0;
  top: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0 5px 5px 0;
`;

const FilterBar = styled.div`
  width: 85%;
  margin-top: 50px;
  display: flex;
`;

const FilterButton = styled.div`
  padding: 10px 40px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  border: 1px solid #b1b1b1;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  span {
    font-weight: 500;
  }
`;

const FilterIcon = styled.div`
  margin-right: 10px;
  transform: rotate(90deg);
  font-size: 20px;
  color: #787878;
`;

const Nav1 = styled.div`
  padding: 10px 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  background: #0096eb;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: white;
  transition: all 350ms;
  margin-right: 10px;
  text-transform: capitalize;
  span {
    font-weight: 500;
  }
  :hover {
    transform: scale(1.01);
  }
`;

const Nav = styled.div`
  padding: 10px 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #0096eb;
  background: white;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-right: 10px;
  transition: all 350ms;
  text-transform: capitalize;
  span {
    font-weight: 500;
  }
  :hover {
    transform: scale(1.01);
  }
`;

const Posts = styled.div`
  width: 85%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Head = styled.div`
  width: 85%;
  margin-top: 50px;
  font-weight: 600;
  font-size: 25px;
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

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
