import React from 'react'
import styled from 'styled-components';
import menuShowcase from '../../images/menuShowcase.jpg';


const MenuShowcase = () => {
  return (

    <MenubackgroundImage>
        <Menuoverlay>
            <h1>Menu</h1>
        </Menuoverlay>

    </MenubackgroundImage>
    
  )
}

export default MenuShowcase;

const MenubackgroundImage = styled.div`
    background-image: url( ${menuShowcase} );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    background-attachment: fixed;
    position: relative;
    width: 100%;

`

const Menuoverlay = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(20, 0, 0, 0.5);
    z-index: 10;

    h1 {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        font-size: 5rem;
    }

`