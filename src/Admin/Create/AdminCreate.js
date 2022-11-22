import React, { useState } from "react";
import styled from "styled-components";
import Head from "../Head";
import Sider from "../Sider";
import Modal from "./Modal";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { IoSendSharp } from "react-icons/io5";

const AdminCreate = () => {
  const [editor, setEditor] = useState("");
  console.log(editor);
  return (
    <Container>
      <Head />
      <Body>
        <Sider />
        <Wrapper>
          <Top>
            <Title>This is a blog</Title>
            <Button>
              <Icon>
                <IoSendSharp />
              </Icon>
              <span>Publish</span>
            </Button>
          </Top>
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            editorState={editor}
            onEditorStateChange={setEditor}
            toolbar={{
              // inline: { inDropdown: true },
              // list: { inDropdown: true },
              // textAlign: { inDropdown: true },
              link: { inDropdown: true },
              // history: { inDropdown: true },
              // image: {
              //   uploadCallback: uploadImageCallBack,
              //   alt: { present: true, mandatory: true },
              // },
            }}
            editorStyle={{
              background: "white",
              padding: "0 10px",
              width: 700,
              height: "100%",
              color: "black",
              marginTop: "20px",
            }}
            wrapperStyle={{
              flex: "1",
              color: "normal",
              background: "#F5F5F5",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          />
        </Wrapper>
      </Body>
      <Modal />
    </Container>
  );
};

export default AdminCreate;

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
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;

const Top = styled.div`
  margin: 20px 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background: #00a573;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
