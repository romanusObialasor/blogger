import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";

const DetailRight = () => {
  return (
    <Container>
      <Ads>ADS GO HERE</Ads>
      <Categories>
        <Head>Categories</Head>
        <Line />
        <Cats>
          <Cat>News</Cat>
          <Cat>Gadget</Cat>
          <Cat>Learn</Cat>
          <Cat>Craft</Cat>
          <Cat>JavaScript</Cat>
          <Cat>Programming</Cat>
        </Cats>
      </Categories>
      <Popular>
        <Head>Popular</Head>
        <Line />
        <PopularPosts>
          <Img src="/assets/user.jpg" />
          <Detail>
            <Topic>Both rest of know draw fond post a rest of know draw </Topic>
            <Date>
              <Icon>
                <AiOutlineClockCircle />
                <span>April 24, 2022</span>
              </Icon>
            </Date>
          </Detail>
        </PopularPosts>
        <PopularPosts>
          <Img src="/assets/user.jpg" />
          <Detail>
            <Topic>Both rest of know draw fond post a rest of know draw </Topic>
            <Date>
              <Icon>
                <AiOutlineClockCircle />
                <span>April 24, 2022</span>
              </Icon>
            </Date>
          </Detail>
        </PopularPosts>
        <PopularPosts>
          <Img src="/assets/user.jpg" />
          <Detail>
            <Topic>Both rest of know draw fond post a rest of know draw </Topic>
            <Date>
              <Icon>
                <AiOutlineClockCircle />
                <span>April 24, 2022</span>
              </Icon>
            </Date>
          </Detail>
        </PopularPosts>
        <PopularPosts>
          <Img src="/assets/user.jpg" />
          <Detail>
            <Topic>Both rest of know draw fond post a rest of know draw </Topic>
            <Date>
              <Icon>
                <AiOutlineClockCircle />
                <span>April 24, 2022</span>
              </Icon>
            </Date>
          </Detail>
        </PopularPosts>
        <PopularPosts>
          <Img src="/assets/user.jpg" />
          <Detail>
            <Topic>Both rest of know draw fond post a rest of know draw </Topic>
            <Date>
              <Icon>
                <AiOutlineClockCircle />
                <span>April 24, 2022</span>
              </Icon>
            </Date>
          </Detail>
        </PopularPosts>
        <PopularPosts>
          <Img src="/assets/user.jpg" />
          <Detail>
            <Topic>Both rest of know draw fond post a rest of know draw </Topic>
            <Date>
              <Icon>
                <AiOutlineClockCircle />
                <span>April 24, 2022</span>
              </Icon>
            </Date>
          </Detail>
        </PopularPosts>
      </Popular>
      <Ads>ADS GO HERE</Ads>
    </Container>
  );
};

export default DetailRight;

const Container = styled.div`
  width: 100%;
`;

const Ads = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px dashed rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 600;
`;

const Categories = styled.div`
  margin-top: 50px;
`;

const Head = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const Line = styled.div`
  margin-top: 10px;
  height: 3px;
  background: #c1193f;
  width: 30px;
`;

const Cats = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const Cat = styled.div`
  color: #0096eb;
  padding: 7px 20px;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  margin: 10px;
  margin-left: 0;
  text-transform: capitalize;
  font-size: 14px;
`;

const Popular = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const PopularPosts = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const Detail = styled.div`
  margin-left: 10px;
`;

const Topic = styled.div`
  font-weight: 500;
  font-size: 18px;
  width: 300px;
`;

const Date = styled.div`
  margin-top: 10px;
  color: #7a7a7a;
  font-size: 13px;
  span {
    margin-left: 5px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
