import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#FFFFFF")};
  background-color: ${(props) => (props.border ? "transparent" : "#000000")};
  width: 150px;
  padding: 15px;
  margin: 0px;
  outline: none;
  color: ${(props) => (props.border ? "#000000" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#10504F")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

