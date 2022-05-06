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

    

    const control = useAnimation();
    const [ref, inView ] = useInView();

    useEffect (() => {

        if(inView) {

            control.start("visible")

        }else {

            control.start("hidden")

        }

    }, [control, inView])


    return ( 
        <StyledMenu ref={ ref } initial="hidden" animate= { control} variants={ showVariant }>
            <div className="inner-menu">
                <p>Genuine and delicious</p>
                <h2>OUR MENU</h2>
            
                <div className="menu-flex">
                    <div className="menu-left-container">
                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>EWA AGOYIN.</h4>
                                <b>+</b>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                <Naira>4500</Naira>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>EWA AGOYIN.</h4>
                                <b>+</b>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                <Naira>4500</Naira>
                            </div>
                        </div>
                    </div>

                    <div className="menu-right-container">
                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>Nigerian Jollof</h4>
                                <b>+</b>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                <Naira>3455</Naira>
                            </div>
                        </div>

                        <div className="menu-flex-item">
                            <div className="meal-name-flex">
                                <h4>EWA AGOYIN.</h4>
                                <b>+</b>
                            </div>

                            <div className="meal-story">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                <Naira>4500</Naira>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledMenu>
     );
}


const StyledMenu = styled(motion.div)`

        width: 100%;
        min-height: 70vh;
        background-color: rgb(243, 243, 243);
        padding: 6.5rem 6rem;
        /* .inner-menu {
            margin: 0 auto;
            max-width: 80%;
        } */

        .inner-menu > p {
            text-align: center;
        }

        .inner-menu > p + h2 {
            text-align: center;
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
            
            .meal-name-flex, .meal-story {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                
                p {
                    color: grey;
            
                }
            }

            .meal-name-flex {
                margin-bottom: 1rem;
            }

            
        
        }

        
        
`
 
export default Menu;