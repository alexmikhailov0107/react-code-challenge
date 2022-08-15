import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text,price, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img src={img} alt="project"></img>
      </ImgBtn>
      <div className="project-styleCenter">
        <p className="extraBold">{title}</p>
        <p className="greyColor">{text}</p>
        <h5 className="font-pacifico-md darkTeal">{price}</h5>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;