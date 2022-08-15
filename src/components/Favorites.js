import React, { Component } from 'react';
import FavoButton from './Buttons/FavoButton';
import BottomBanner from '../assets/img/bottom-banner.png';
class FavoriteSection extends Component {
    render() {
        const btnStyles = {
            window : '100px',
            height : '50px',
            backgroundColor : '#10504F',
            border : '#FFFFFF'
        };
        const imgStyles = {
            width : '100%'
        };
        const textStyles = {
            position: 'relative'
        };
        return (
            <div style={textStyles}>
                <img src={BottomBanner} style = {imgStyles} alt="bottomBanner"></img>
                <div className='favorite-text-style'>
                    <h3 className='fav-col font-pacifico-lg'>Our Favorite Tees</h3>
                    <p className='fav-col font-standard-md'>Everyday tees you need</p>
                    <FavoButton title = "SHOP NOW" style={btnStyles}></FavoButton>
                </div>
            </div>
        );
    }
}

export default FavoriteSection;
