import React from 'react';
import styled from 'styled-components';
import maeTwo  from '../../images/maeTwo.jpg';

const Showcase = () => {
    return (  
        <BackgroundImage>
            <div className="overlay">
                <div className="showcase-text">
                    <h1>RESTAURANT</h1>
                    <p>We promise the best delights. We give the best flavors. Let's give you the taste that you deserve.</p>
                    <button>VIEW THE MENU</button>
                </div>
            </div>
        </BackgroundImage>
    );
}

const BackgroundImage = styled.div`
    background-image: url( ${maeTwo} );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 105vh;
    background-attachment: fixed;
    background-position-y: 40%;
    position: relative;
    width: 100%;


    /* overlay */

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(20, 0, 0, 0.5);
        z-index: 10;
    }

    .showcase-text {

        text-align: center;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 100%;

        h1 {
            font-size: 8vw;
            margin-bottom: 1.4rem;
        }

        p{  
            font-size: 1.1rem;
            margin-bottom: 2rem;
            width: 100%;
        }

        button {
            background-color: transparent;
            color: white;
            border: 1px solid white;
            padding: 0.9rem 2.5rem;
            font-size: 1rem;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: color 0.3s ease-in-out;
            letter-spacing: 0.09rem;
        }

        button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: white;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
        }

        button:hover::before{
            transform: scaleX(1);
        }

        button:hover {
            color: black;
        }
    }

`
 
export default Showcase;