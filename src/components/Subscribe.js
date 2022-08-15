import React, { Component } from 'react';
import styled from "styled-components";
import FavoButton from './Buttons/FavoButton';
class SubscribeSection extends Component {
    render() {
        const styles = {
            width : '100%',
            backgroundColor : '#10504F'
        };
        const inputStyles = {
            margin : '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize : '15px',
            width : '100%',
            height : '50px',
            backgroundColor : '#FFFFFF',
            color : '#777777'
        };
        const btnStyles = {
            height : '50px',
            backgroundColor : '#10504F',
            border : '#FFFFFF'
        };

        return(
            <div style = {styles}>  
                <div className='container'>
                      <p className = "whiteColor textCenter font-pacifico-bg"> Sign up Stay Connected </p>
                    <InnerWrapper className="flexSpaceCenter" style={{ padding: "50px 0" }}>
                        <p className='whiteColor'>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                        <p style={inputStyles}>Enter Your Email Address</p>
                        <FavoButton title = "Subscribe" style={btnStyles}></FavoButton>
                    </InnerWrapper>
                </div>
            </div>
        );
    }
}

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export default SubscribeSection;
