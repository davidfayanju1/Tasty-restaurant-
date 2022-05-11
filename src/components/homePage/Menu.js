import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import Naira from 'react-naira';
import { motion, useAnimation } from 'framer-motion';
// import { pageAnimation } from '../pageAnimation'in
import { useInView } from 'react-intersection-observer';

const showVariant = {
    visible: {opacity: 1, transition: { duration: 5 }},
    hidden: {opacity: 0 }
};

const Menu = () => {

    const [ toggleMenu, setToggleMenu ] = useState(false);

    const control = useAnimation();
    const [ref, inView ] = useInView();

    const clickMenu = () => {

        setToggleMenu(!toggleMenu);

        console.log('clicked', toggleMenu);
    }



    useEffect (() => {

        if(inView) {

            control.start("visible")

        }else {

            control.start("hidden")

        }

    }, [control, inView])


    return ( 
        <StyledMenu ref={ ref } initial="hidden" animate= { control } variants={ showVariant }>
            <div className="inner-menu">
                <p>Genuine and delicious</p>
                <h1>OUR MENU</h1>
            
                <div className="menu-flex">
                    <div className="menu-left-container">
                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>RICE AND BEANS</h4>
                                <Naira>4500</Naira>
                            </div>

                            <div className='meal-story'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex"   onClick={ clickMenu }>
                                <h4>EWA AGOYIN.</h4>
                                <Naira>4500</Naira>
                            </div>

                            <div className='meal-story'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>RICE AND BEANS</h4>
                                <Naira>4500</Naira>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>EWA AGOYIN.</h4>
                                <Naira>4500</Naira>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="menu-right-container">
                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>NIGERIAN JOLLOF</h4>
                                <Naira>3455</Naira>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>YAM PORRIDGE</h4>
                                <Naira>4500</Naira>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>NIGERIAN JOLLOF</h4>
                                <Naira>3455</Naira>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>YAM PORRIDGE</h4>
                                <Naira>4500</Naira>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="full-menu-btn">
                    <button>FULL MENU</button>
                </div>
            </div>
        </StyledMenu>
     );
}


const StyledMenu = styled(motion.div)`

        width: 100%;
        min-height: 70vh;
        background-color: rgb(243, 243, 243);
        padding: 6.5rem 2.3rem;
        /* .inner-menu {
            margin: 0 auto;
            max-width: 80%;
        } */

        .inner-menu > p {
            text-align: center;
            margin-bottom: 1.25rem;
            color: grey;
            font-size: 1.1rem;
        }

        .inner-menu > p + h1 {
            text-align: center;
            font-size: 3rem;
        }

        .full-menu-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 2rem;

            button {
                border: none;
                background-color: #231F20;
                color: white;
                font-size: 0.95rem;
                width: 11rem;
                padding: 0.8rem 2rem;
                cursor: pointer;
                transition: all 0.45s ease-in-out;
            }

            button:hover {
                box-shadow: 2px 2px 50px grey;
                background-color: black;
            }
        }

        .menu-flex {
            margin-top: 4rem;
            display: flex;
            justify-content: space-between;
            width: 100%;

            .menu-left-container, .menu-right-container {
                width: 48%;
            }

            .menu-flex-item {
                width: 100%;
                margin-bottom: 2rem;
            }

            
            
            .meal-name-flex{
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                margin-bottom: 1rem;

                
                p {
                    color: grey;
            
                }
            }

            .meal-story::after {
                content: '';
                width: 100%;
                height: 0.1rem;
                background-color: black;
                display: block;
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.45s ease-in-out
            }

            .menu-flex-item:hover {
                
                .meal-story::after {
                    transform: scaleX(1.02);
                }
            }

            .meal-story {

                p{
                    color: grey;
                    margin-bottom: 0.5rem;
                }
            }

            /* toggle classes */

            .open-menu {
                display: block;
            }

            .close-menu {
                display: none;
            }
            
        
        }

        @media screen and (max-width: 768px) {

            .menu-flex {
            
                flex-direction: column;
                align-items: center;
                justify-content: center;

            .menu-left-container, .menu-right-container {
                width: 100%;
            }
        }


        .full-menu-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 2rem;

            button {
                background-color: #231F20;
                color: white;
                font-size: 0.95rem;
                width: 11rem;
                padding: 0.8rem 2rem;
                
            }

            
        }

        }
        
`
 
export default Menu;