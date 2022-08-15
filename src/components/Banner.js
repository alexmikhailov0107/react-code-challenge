import React, { Component } from 'react';
class Banner extends Component {
    render() {
        const hStyle = {
                background: 'black',
                color: 'white' ,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height :'58px'
            };
        return(
            <div style={hStyle} >
                <p>FREE SHIPPING ON ALL ORDERS OVER $75</p>
            </div>
        );
    }
}

export default Banner;
