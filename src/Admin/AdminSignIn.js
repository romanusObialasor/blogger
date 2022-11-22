import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const [password, setPassword] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  const navigate = useNavigate();

  const onToggle = () => {
    setToggle(!toggle);
  };

  const submit = () => {
    navigate("/admindash/home/secureID");
  };

  return (
    <Container>
      <ImageHolder>
        <Image src="/assets/welcome-left.png" />
      </ImageHolder>
      <Box>
        <Title>Welcome, Mr Lucky</Title>
        <Sub>
          Enter your password to continue
          <br /> to your dashbord
        </Sub>
        <InputHolder>
          {toggle ? (
            <Input
              placeholder="Enter password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <Input
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          {password === "" ? null : toggle ? (
            <Icon onClick={onToggle}>
              <AiFillEyeInvisible />
            </Icon>
          ) : (
            <Icon onClick={onToggle}>
              <AiFillEye />
            </Icon>
          )}
        </InputHolder>
        <Submit onClick={submit}>Sign in</Submit>
      </Box>
      <ImageHolder>
        <Image src="/assets/welcome-right.png" />
      </ImageHolder>
    </Container>
  );
};

export default AdminSignIn;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ImageHolder = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const Box = styled.div`
  flex: 0.7;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 85%;
`;

const Title = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 25px;
`;

const Sub = styled.div`
  font-size: 15px;
  text-align: center;
  opacity: 0.7;
  margin-top: 5px;
`;

const InputHolder = styled.div`
  display: flex;
  margin-top: 40px;
  background: #d9d9d9;
  align-items: center;
  width: 70%;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  padding-left: 20px;
`;

const Input = styled.input`
  flex: 0.97;
  height: 100%;
  border: none;
  background: transparent;
  outline: 0;
  font-size: 14px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  color: #00a573;
`;

const Submit = styled.div`
  margin-top: 15px;
  height: 45px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00a573;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

// const Container = styled.div``
