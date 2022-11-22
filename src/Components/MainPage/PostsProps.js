import React from "react";
import styled from "styled-components";
import { IoPricetagOutline } from "react-icons/io5";
import {
  AiOutlineClockCircle,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const PostsProps = ({ cover, tag, topic, date, comment, detail }) => {
  return (
    <Container>
      <ImageHolder>
        <Image src={cover} />
      </ImageHolder>
      <Tag>
        <TagIcon>
          <IoPricetagOutline />
          <span>#{tag}</span>
        </TagIcon>
      </Tag>
      <NavLink
        to="/detail"
        style={{
          textDecoration: "none",
        }}
      >
        <Title>{topic}</Title>
      </NavLink>

      <Text>
        {detail}{" "}
        <NavLink
          to="/detail"
          style={{
            textDecoration: "none",
          }}
        >
          <span>Read more</span>
        </NavLink>
      </Text>
      <Bottom>
        <IconHolder>
          <Icon>
            <AiOutlineClockCircle />
          </Icon>
          <Span>{date}</Span>
        </IconHolder>
        <IconHolder>
          <Icon>
            <AiOutlineMessage />
          </Icon>
          <Span>{comment}</Span>
        </IconHolder>
        <IconHolder pointer>
          <Icon>
            <AiOutlineShareAlt />
          </Icon>
          <Span>Share</Span>
        </IconHolder>
      </Bottom>
    </Container>
  );
};

export default PostsProps;

const Container = styled.div`
  width: 350px;
  height: 450px;
  background: white;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: height 350ms;
  position: relative;
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 15px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(1.1);
  }
`;

const Tag = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  span {
    margin-left: 15px;
    color: #0096eb;
    font-size: 14px;
    text-transform: capitalize;
  }
`;

const TagIcon = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
`;

const Title = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  color: black;
`;

const Text = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-size: 14px;
  color: #787878;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  span {
    color: #0096eb;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: absolute;
  bottom: 18px;
`;

const IconHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.div`
  font-size: 13px;
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
