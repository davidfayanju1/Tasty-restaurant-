import React from 'react';
import styled from 'styled-components'
import MenuGrid from '../components/menuPage/MenuGrid';
import MenuShowcase from '../components/menuPage/MenuShowcase';

const MenuPage = ({ products }) => {
    return ( 
        <div className="Menu">
            <MenuShowcase />
            <MenuGrid products={ products }/>
        </div>

     );
}
 
export default MenuPage;