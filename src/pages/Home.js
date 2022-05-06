import React from 'react';
// import styled from 'styled-components';
import Nav from '../components/Nav';
import Book from '../components/Book';
import Menu from '../components/Menu';

const Home = () => {
    return ( 
        <div className="home">
            <Nav />
            <Book />
            <Menu />
        </div>
     );
}
 
export default Home;