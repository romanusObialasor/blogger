import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Modal = () => {
  return (
    <Container id="modal">
      <Box>
        <Head>Enter The Following Details</Head>
        <InputHolder>
          <Next>
            <Top>
              <Input placeholder="Title" />
              <Input placeholder="Sub Title" />
              <TagInput>
                <Input placeholder="Add Tag" />
                <AddTag>Add</AddTag>
              </TagInput>
              <TagHolder>
                <Tag>javascript</Tag>
                <Tag>News</Tag>
              </TagHolder>
            </Top>
            <ImageUpload htmlFor="image">
              <Image src="/assets/upload.png" />
              <Text>Click to upload A thumbnail</Text>
              <input type="file" id="image" />
            </ImageUpload>
          </Next>
        </InputHolder>
        <Bottom>
          <Buttons>
            <One to="/admindash/home/secureID">Cancel</One>
            <Two
              onClick={() => {
                document.getElementById("modal").style.display = "none";
              }}
            >
              Create
            </Two>
          </Buttons>
        </Bottom>
      </Box>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Box = styled.div`
  width: 750px;
  height: 500px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Head = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
`;

const InputHolder = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  /* flex-direction: column; */
  height: 320px;
  overflow-y: scroll;
`;

const Input = styled.input`
  width: 70%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 35px;
  transition: all 250ms;
  font-size: unset;
  :focus {
    border-bottom: 1px solid #00a573;
  }
`;

const TagInput = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const AddTag = styled.div`
  width: 90px;
  height: 40px;
  background: #00a573;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 15px;
  cursor: pointer;
`;

const TagHolder = styled.div`
  width: 75%;
  height: 100px;
  background: #efefef;
  border-radius: 5px;
  margin-top: -20px;
  display: flex;
  flex: wrap;
`;

const Tag = styled.div`
  margin: 10px;
  margin-right: 0;
  padding: 0 15px;
  height: 40px;
  background: white;
  color: #00a573;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-size: 14px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 70px;
  background: #d9d9d9;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Buttons = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
`;

const One = styled(NavLink)`
  margin-right: 20px;
  color: black;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
`;

const Two = styled.div`
  width: 120px;
  height: 40px;
  background: #00a573;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const ImageUpload = styled.label`
  height: 300px;
  width: 80%;
  margin-top: 20px;
  background: #f6f7f8;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  input {
    display: none;
  }
`;

const Next = styled.div`
  /* height: ; */
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.div`
  height: 610px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img``;

const Text = styled.div`
  margin-top: 20px;
`;
