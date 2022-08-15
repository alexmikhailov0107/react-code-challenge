import React, { Component } from 'react';
import styled from "styled-components";
import InfiniteCarousel from 'react-leaf-carousel';
import productImage from "../../assets/img/image_product.png";
import LeafBox from '../Sections/LeafBox';
class LeafCarousel extends Component {
    render() {
        return(
        <Wrapper id="projects">
            <div className="whiteBg">
              <div className="container">
                <InfiniteCarousel
                    breakpoints={[
                    {
                        breakpoint: 460,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 560,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        },
                    },
                    ]}
                    dots={false}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <LeafBox
                        img={productImage}
                        title="Product Title"
                        text="WOMEN'S T-SHIRT"
                        price="$19.99"
                    />
                    <LeafBox
                        img={productImage}
                        title="Product Title"
                        text="WOMEN'S T-SHIRT"
                        price="$19.99"

                    />
                    <LeafBox
                        img={productImage}
                        title="Product Title"
                        text="WOMEN'S T-SHIRT"
                        price="$19.99"
                    />
                    <LeafBox
                        img={productImage}
                        title="Product Title"
                        text="WOMEN'S T-SHIRT"
                        price="$19.99"
                    />
                    <LeafBox
                        img={productImage}
                        title="Product Title"
                        text="WOMEN'S T-SHIRT"
                        price="$19.99"
                    />
                    <LeafBox
                        img={productImage}
                        title="Product Title"
                        text="WOMEN'S T-SHIRT"
                        price="$19.99"
                    />
                </InfiniteCarousel>
                </div>
            </div>
        </Wrapper>
        );
    }
}
const Wrapper = styled.section`
  width: 100%;
`;
export default LeafCarousel;