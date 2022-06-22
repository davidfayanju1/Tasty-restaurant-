import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';


const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
      };

    return ( 
        <StyledCarousel>
            <Slider {...settings} className="slider">
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                    <h1>6</h1>
                </div>
                <div>
                    <h1>8</h1>
                </div>
                <div>
                    <h1>10</h1>
                </div>
                <div>
                    <h1>14</h1>
                </div>
            </Slider>
        </StyledCarousel>
     );
}

const StyledCarousel = styled.div`

    width: 100%;
    background-color: chocolate;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .slider {
        background-color: transparent;
        width: 70%;
        height: 10rem;

        div {

            /* width: 8px; */
            
            h1 {
                color: black;
                text-align: center;
                line-height: 150px;
            }
        }
    }
`
 
export default Carousel;