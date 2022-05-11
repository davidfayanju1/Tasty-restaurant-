import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
            <StyledNav bgColor={ bgColor }>                            
                <h1><a href="#">TASTY.</a></h1>
                <div onClick ={ burgerToggle } className={`nav-icon ${ bgColor ? 'burger-active' : 'burger-inactive'}`}>
                    <span className="burger"></span>
                    <span className="burger"></span>
                    <span className="burger"></span>
                </div>
                <div className={`nav-links ${toggle ? 'nav-open' : 'nav-close'}`}>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>

                        <li>
                            <Link to="/menu">MENU</Link>
                        </li>

                        <li>
                            <Link to="/reservation">RESERVATION</Link>
                        </li>
                        
                        <li>
                            <Link to="/order">ORDER</Link>
                        </li>
                    </ul>
                </div>
            </StyledNav>
     );
}




const StyledNav = styled.nav`
    background-color: ${({ bgColor }) => ( bgColor ? 'white' : 'transparent')};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    align-items: center;
    width: 100%;
    transition: all 0.4s ease-in-out;
    top: 0;
    position: fixed;
    z-index: 100;
    box-shadow: ${({ bgColor }) => ( bgColor ? '2px 3px 20px rgba(0, 0, 0, 0.1);' : '')};
    


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
        color: ${({ bgColor }) => (bgColor ? 'black' : 'white')};
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