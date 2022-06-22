import React from 'react';
import Book from '../components/homePage/Book';
import Menu from '../components/homePage/Menu';
import Showcase from '../components/homePage/Showcase';
import SnackIntro from '../components/homePage/SnackIntro';
import Snack from '../components/homePage/Snacks';
import Carousel from '../components/homePage/Carousel';

const Home = () => {
    return ( 
        <div className="home">
            <Showcase />
            <Book />
            <Menu />
            <Snack />
            <SnackIntro />
            <Carousel />
        </div>
     );
}
 
export default Home;