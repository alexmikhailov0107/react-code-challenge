import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";

// Assets
import ProjectImg1 from "../../assets/img/Image_1.png";
import ProjectImg2 from "../../assets/img/Image_2.png";
import ProjectImg3 from "../../assets/img/Image_3.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <div className="row project-styleCenter">
            <div className="top-style">
              <ProjectBox
                img={ProjectImg1}
                title="Women's"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="top-style">
              <ProjectBox
                img={ProjectImg2}
                title="Men's"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
            <div className="bot-style">
              <ProjectBox
                img={ProjectImg3}
                title="Accessories"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

