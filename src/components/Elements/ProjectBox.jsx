import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font-pacifico-md">{title}</h3>
      {/* <p className="font13">{text}</p> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  @media only screen and (min-width:412px){
    img {
      width: 100%;
      max-height: 250px;
      height: 250px;
      object-fit: cover;
      margin: -10px 0;
    }
    h3 {
      color : #fff;
      background-color : #10504F;
    }
  }

  @media only screen and (min-width:992px){
    img {
      width: 100%;
      max-height: 469px;
      height: 469px;
      object-fit: cover;
      margin: -10px 0;
    }
    h3 {
      color : #fff;
      background-color : #10504F;
    }
  }

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