import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import maeTwo  from '../images/maeTwo.jpg'

const Nav = () => {

    const [ bgColor, setbgColor ] = useState(false);
    const [ toggle, setToggle ] = useState(false);

    const burgerToggle = () => {

        setToggle(!toggle);
    }

    const changeBackgroundBg = () => {

        if(window.scrollY >= 60) {
            setbgColor(true)

        }else{
            setbgColor(false)
        }
    }


    useEffect(()=> {

        window.addEventListener('scroll', changeBackgroundBg);

    },[])



    return ( 
        <BackgroundImage>
            <div className="overlay">
            <StyledNav className={ bgColor ? 'active' : 'in-active' }>                            
                <h1><a href="#">TASTY.</a></h1>
                <div onClick ={ burgerToggle } className={`nav-icon ${ bgColor ? 'burger-active' : 'burger-inactive'}`}>
                    <span className="burger"></span>
                    <span className="burger"></span>
                    <span className="burger"></span>
                </div>
                <div className={`nav-links ${toggle ? 'nav-open' : 'nav-close'}`}>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>

                        <li>
                            <a href="#">MENU</a>
                        </li>

                        <li>
                            <a href="#">RESERVATION</a>
                        </li>
                        
                        <li>
                            <a href="#">ORDER</a>
                        </li>
                    </ul>
                </div>
            </StyledNav>

            {/* showcase text */}

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
            font-size: 8vmax;
            margin-bottom: 1.4rem;
        }

        p{  
            font-size: 1.1rem;
            margin-bottom: 2rem;
            width: 70%;
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

    .active {
        background-color: white;
        box-shadow: 2px 3px 25px rgba(0, 0, 0, 0.1);

        a{
            color: black;
        }
    }

    .in-active {
        background-color: transparent;
        color: black;
    }


    @media screen and (max-width: 768px) {

        /* .showcase-text {

            h1 {
                font-size: 4rem;
            }
        } */
    }
`


const StyledNav = styled.nav`
    background-color: transparent;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    align-items: center;
    width: 100%;
    transition: all 0.4s ease-in-out;
    top: 0;
    position: fixed;
    z-index: 100;


    /* burger */

    .nav-icon {
        display: none;
    }

    .burger {
        display: block;
        background-color: white;
        height: 3px;
        width: 25px;
        margin: 5px auto;
        border-radius: 6px;
    }

    .burger-active > * {
        background-color: black;
    }

    .burger-inactive > * {
        background-color: white;
    }

    h1 {
        font-family: 'Lobster', cursive;
        font-size: 1.7rem;
    }

    a{
        text-decoration: none;
        color: white;
        font-weight: bolder;
    }

    ul{
        display: flex;
    }

    li {
        list-style: none;
        margin-left: 1.7rem;
        font-size: 1rem;
    }


    @media screen and (max-width: 768px) {



        .nav-icon {
            display: block;
            cursor: pointer;
        }

        .nav-links {
            position: absolute;
            top: 100%;
            left: 0%;
            background-color: #0B0B45;
            height: 53vh;
            width: 100%;
            padding: 2rem 2rem;
        }

        ul {
            flex-direction: column;
        }

        li {
            margin-bottom: 2rem;
            width: 100%;
        }

        .nav-open {
            display: block;
        }

        .nav-close {
            display: none;
        }
    }
`;
 
export default Nav;