import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import top_pic1 from '../../assets/img/banner1.png';
import top_pic2 from '../../assets/img/banner2.png';
import top_pic3 from '../../assets/img/banner3.png';
import OtherButton from '../Buttons/OtherButton';
class TopCarousel extends Component {

    render() {
        const btnStyles = {
            align:'center',
            fontSize :'14px',
            window : '100px',
            height : '50px',
            backgroundColor : '#000000',
            border : '#FFFFFF',
            lineHeight : '16.8px'
        };
        return(
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src={top_pic1} alt="top_pic1"></img>
                    <div className='top-carousel-text-style'>
                        <h3 className='top-carousel-color1 font-pacifico-lg'>Shop New Arrivals</h3>
                        <p className='top-carousel-color1 font-standard-md '>Our coolest new items are waiting for you</p>
                        <OtherButton title = "SHOP NOW" style={btnStyles}></OtherButton>
                    </div>
                </div>
                <div>
                    <img src={top_pic2} alt="top_pic2"></img>
                    <div className='top-carousel-text-style'>
                        <h3 className='top-carousel-color2 font-pacifico-lg'>Our Fave Tees</h3>
                        <p className='top-carousel-color2 font-standard-md'>Shop all of our favorites</p>
                        <OtherButton title = "SHOP NOW" style={btnStyles}></OtherButton>
                    </div>
                </div>
                <div>
                    <img src={top_pic3} alt="top_pic3"></img>
                    <div className='top-carousel-text-style'>
                        <h3 className='top-carousel-color2 font-pacifico-lg'>Men's Tees</h3>
                        <p className='top-carousel-color2 font-standard-md whiteColor'>Perfect all our shirts</p>
                        <OtherButton title = "SHOP NOW" style={btnStyles}></OtherButton>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default TopCarousel;
