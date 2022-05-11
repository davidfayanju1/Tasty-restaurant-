import React from 'react';
import Book from '../components/homePage/Book';
import Menu from '../components/homePage/Menu';
import Showcase from '../components/homePage/Showcase';
import SnackIntro from '../components/homePage/SnackIntro';
import Snack from '../components/homePage/Snacks';

const Home = () => {
    return ( 
        <div className="home">
            <Showcase />
            <Book />
            <Menu />
            <Snack />
            <SnackIntro />
        </div>
     );
}
 
export default Home;