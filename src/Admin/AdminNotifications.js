import React from "react";
import styled from "styled-components";
import Head from "./Head";
import Sider from "./Sider";

const AdminNotifications = () => {
  return (
    <Container>
      <Head />
      <Body>
        <Sider />
        <Wrapper>
          <Image src="/assets/404.gif" />
          <Err>Page under development</Err>
          <Text>
            this page is yet to be created, because <br /> it's not a primary
            problem
          </Text>
        </Wrapper>
      </Body>
    </Container>
  );
};

export default AdminNotifications;

const Container = styled.div`
  color: #78909c;
`;

const Body = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  height: calc(100vh - 71px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 400px;
  /* margin-top: -100px; */
`;

const Err = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 10px;
  opacity: 0.7;
`;
