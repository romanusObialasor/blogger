import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import {
  AiOutlineClockCircle,
  AiOutlineTag,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineShareAlt,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiStackLine, RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import RelatedCard from "./RelatedCard";
import Footer from "../Footer/Footer";
import DetailRight from "./DetailRight";

const Detail = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Left>
          <Wrapper>
            <EditorHolder>
              <Image src="/assets/user.jpg" />
              <EditorDetail>
                <Name>Gospel Okereke</Name>
                <PostedAt>
                  <Icon>
                    <AiOutlineClockCircle />
                  </Icon>
                  <Span>
                    Posted at <span>April 24, 2022</span>
                  </Span>
                </PostedAt>
              </EditorDetail>
            </EditorHolder>
            <Title>
              Surprise steepest recurred landlord mr wandered amounted{" "}
            </Title>
            <Holder>
              <Sub>Both rest of know draw fond </Sub>
              <Tag>
                <TagIcon>
                  <AiOutlineTag />
                </TagIcon>
                <Tags>
                  <span>programming, </span>
                  <span>javascript</span>
                </Tags>
              </Tag>
            </Holder>
            <CoverImage src="/assets/1.jpeg" />
            <Text>
              Both rest of know draw fond post as. It agreement defective to
              excellent. Feebly do engage of narrow. Extensive repulsive
              belonging depending if promotion be zealously as. Preference
              inquietude ask now are dispatched led appearance. Small meant in
              so doubt hopes. Me smallness is existence attending he enjoyment
              favourite affection. Delivered is to ye belonging enjoyment
              preferred. Astonished and acceptance men two discretion. Law
              education recommend did objection how old.
              <br />
              <br />
              Surprise steepest recurred landlord mr wandered amounted of.
              Continuing devonshire but considered its. Rose past oh shew roof
              is song neat. Do depend better praise do friend garden an wonder
              to. Intention age nay otherwise but breakfast. Around garden
              beyond to extent by. inquietude ask now are dispatched led
              appearance. Small meant in so doubt hopes. Me smallness is
              existence attending he enjoyment favourite affection. Delivered is
              to ye belonging enjoyment preferred. Astonished and acceptance men
              two discretion. Law education recommend did objection how old.
              <br />
              <br />
              Surprise steepest recurred landlord mr wandered amounted of.
              Continuing devonshire but considered its. Rose past oh shew roof
              is song neat. Do depend better praise do friend garden an wonder
              to. Intention age nay otherwise but breakfast. Around garden
              beyond to extent by.
            </Text>
            <RelatedHead>
              <RLeft>
                <RIcon>
                  <RiStackLine />
                </RIcon>
                <RText>Related Post</RText>
              </RLeft>
              <RRight>
                <RLeftIcon>
                  <AiOutlineLeft />
                </RLeftIcon>
                <RRightIcon>
                  <AiOutlineRight />
                </RRightIcon>
              </RRight>
            </RelatedHead>
            <RelatedBox>
              <RelatedCard />
              <RelatedCard />
              <RelatedCard />
            </RelatedBox>
            <ShareBar>
              <ShareIcon>
                <AiOutlineShareAlt />
              </ShareIcon>
              <span>share</span>
              <SocialIcon
                style={{
                  background: "#1B74E4",
                }}
              >
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon
                style={{
                  background: "#00E676",
                }}
              >
                <BsWhatsapp />
              </SocialIcon>
              <SocialIcon
                style={{
                  background: "#3EB5EC",
                }}
              >
                <BsTwitter />
              </SocialIcon>
              <SocialIcon
                style={{
                  background: "#016EAB",
                }}
              >
                <RiLinkedinFill />
              </SocialIcon>
            </ShareBar>
            <CommentSection>
              <CommentHead>
                <RLeft>
                  <RIcon>
                    <AiOutlineMessage
                      style={{
                        color: "white",
                      }}
                    />
                  </RIcon>
                  <RText>Comments</RText>
                </RLeft>
                <Num>40</Num>
              </CommentHead>
              <AddButton>+</AddButton>
              <Comments>
                <CommentBox>
                  <LBox>
                    <Avatar src="/assets/user.jpg" />
                  </LBox>
                  <RBox border>
                    <ComHead>
                      <Top>
                        <ComName>Romanus Obaialsor</ComName>
                        <Date>November 22,2022 AT 11:20PM</Date>
                      </Top>
                      <Reply>
                        <ReplyIcon>
                          <TiArrowForwardOutline />
                        </ReplyIcon>
                        <span>Reply</span>
                      </Reply>
                    </ComHead>
                    <CommentTxt>
                      Surprise steepest recurred landlord mr wandered amounted
                      of. Continuing devonshire but considered its. Rose past oh
                      shew roof is song neat. Do depend better praise do friend
                      garden an wonder to. Intention age
                    </CommentTxt>
                    <ReplayBox>
                      <LBox>
                        <Avatar src="/assets/user.jpg" />
                      </LBox>
                      <RBox>
                        <ComHead>
                          <Top>
                            <ComName>Romanus Obaialsor</ComName>
                            <Date>November 22,2022 AT 11:20PM</Date>
                          </Top>
                        </ComHead>
                        <CommentTxt>
                          Surprise steepest recurred landlord mr wandered
                          amounted of. Continuing devonshire but considered its.
                          Rose past oh shew roof is song neat. Do depend better
                          praise do friend garden an wonder to. Intention age
                        </CommentTxt>
                      </RBox>
                    </ReplayBox>
                  </RBox>
                </CommentBox>
              </Comments>
            </CommentSection>
          </Wrapper>
        </Left>
        <Right>
          <DetailRight />
        </Right>
      </Body>
      <Footer />
    </Container>
  );
};
export default Detail;

const Container = styled.div``;

const Body = styled.div`
  width: 100%;
  display: flex;
`;

const Left = styled.div`
  flex: 0.8;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-left: 50px;
  margin-top: 70px;
  margin-right: 50px;
`;

const EditorHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  object-fit: cover;
`;

const EditorDetail = styled.div`
  margin-left: 20px;
  font-size: 13px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const PostedAt = styled.div`
  display: flex;
  margin-top: 7px;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.div`
  margin-left: 7px;
  span {
    color: #0096eb;
  }
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 500;
  max-width: 70%;
  line-height: 1.3;
`;

const Holder = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const Sub = styled.div`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
`;

const TagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
`;

const Tags = styled.div`
  margin-left: 10px;
  color: #0096eb;
  font-size: 13px;
  span {
    cursor: pointer;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-top: 60px;
`;

const Text = styled.div`
  margin-top: 40px;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 1.7;
`;

const RelatedHead = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
`;

const RLeft = styled.div`
  display: flex;
  margin-left: 40px;
`;

const RIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #7a7a7a;
`;

const RText = styled.div`
  margin-left: 20px;
  font-weight: 600;
`;

const RRight = styled.div`
  display: flex;
  color: #0096eb;
  font-size: 25px;
`;

const RLeftIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const RRightIcon = styled.div`
  margin-right: 40px;
  cursor: pointer;
`;

const RelatedBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const ShareBar = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  span {
    margin-left: 10px;
    color: #7a7a7a;
    margin-right: 30px;
  }
`;

const ShareIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: #7a7a7a;
`;

const SocialIcon = styled.div`
  margin-left: 30px;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const CommentSection = styled.div`
  width: 100%;
  height: auto;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 80px;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;

const CommentHead = styled.div`
  display: flex;
  width: 100%;
  background: #c1193f;
  color: white;
  height: 50px;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`;

const Num = styled.div`
  color: white;
  margin-right: 40px;
`;

const AddButton = styled.div`
  color: white;
  height: 50px;
  width: 50px;
  background: #0096eb;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 70px;
  right: 20px;
`;

const Comments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  flex-direction: column;
`;

const CommentBox = styled.div`
  display: flex;
  padding: 0 50px;
  margin-top: 20px;
`;

const LBox = styled.div``;

const Avatar = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const RBox = styled.div`
  margin-left: 20px;
  padding-bottom: 50px;
  border-bottom: ${({ border }) =>
    border ? "1px solid #0096eb" : "1px solid rgba(0, 0, 0, 0.2)"};
`;

const ComHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Top = styled.div``;

const ComName = styled.div`
  font-weight: 500;
  color: #c1193f;
  font-size: 17px;
`;

const Date = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #7a7a7a;
`;

const Reply = styled.div`
  display: flex;
  color: #0096eb;
  cursor: pointer;
  height: 100%;
`;

const ReplyIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const CommentTxt = styled.div`
  margin-top: 30px;
  line-height: 1.4;
`;

const ReplayBox = styled.div`
  display: flex;
  margin-top: 40px;
`;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

const Right = styled.div`
  height: auto;
  flex: 0.2;
  display: flex;
  justify-content: center;
  padding: 50px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;
