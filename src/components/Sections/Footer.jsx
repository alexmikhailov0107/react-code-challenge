import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../style/FooterStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faTwitterSquare  } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  const style1 ={
    marginLeft: '20px'
  };
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading className="font-pacifico-md">Custom Services</Heading>
            <FooterLink href="#">Accessibility</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
            <FooterLink href="#">Return Policies</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Git Certificates</FooterLink>
            <FooterLink href="#">Wishlist</FooterLink>
          </Column>
          <Column>
            <Heading className="font-pacifico-md">Company</Heading>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Affiliates</FooterLink>
          </Column>
          <Column></Column>
          <Column >
            <Heading className="font-pacifico-md">Follow us</Heading>
            <div className="whiteColor font25 flex">
              <div>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div style={style1}>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;