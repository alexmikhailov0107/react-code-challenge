import React from "react";
import styled from "styled-components";
// Assets
import fLogo from "../assets/img/f.svg"
export default function Contact() {
  return (
    <Wrapper>
      <div className="darkBlack">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
          
            <StyleP >
              <div className="font-footer-white">Custom Services</div>
              <div className="font-footer-white-sub">Accessibility</div>
              <div className="font-footer-white-sub">Contact us</div>
              <div className="font-footer-white-sub">Return Policy</div>
              <div className="font-footer-white-sub">FAQ</div>
              <div className="font-footer-white-sub">Git Certificates</div>
              <div className="font-footer-white-sub">WishLists</div>
            </StyleP>

            <StyleP className="footer-margin1">
              <div className="font-footer-white">Company</div>
              <div className="font-footer-white-sub">About us</div>
              <div className="font-footer-white-sub">Careers</div>
              <div className="font-footer-white-sub">Press</div>
              <div className="font-footer-white-sub"><br/></div>
              <div className="font-footer-white-sub"><br/></div>
              <div className="font-footer-white-sub"><br/></div>
            </StyleP>            
            <StyleP>
              <div className="font-footer-white">Follow us</div>           
              {/* <LogoWrapper className="flexCenter">
                <ImgStyle src={fLogo} alt="client logo" />
              </LogoWrapper> */}
              <div className="font-footer-white-s"><br/></div>
              <div className="font-footer-white-s"><br/></div>
            </StyleP>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const LogoWrapper = styled.div`
  width: 50%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 35%;
  height: 35%;
`;