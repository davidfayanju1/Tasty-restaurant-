import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Naira from 'react-naira';
import Scrollspy from 'react-scrollspy';


const MenuGrid = ( { products }) => {

   const [maincoursesArray, setMaincoursesArray ] = useState([]);
   const [appetizersArray, setAppetizersArray ] = useState([]);
   const [dessertArray, setDessertArray ] = useState([]);
   const [snacksArray, setSnacksArray ] = useState([]);
   const [drinksArray, setDrinksArray ] = useState([]);



   
    useEffect(() => {

        const mainCourses =  products.filter((item) => item.categories[0].name === 'MAIN COURSES')       

        setMaincoursesArray(mainCourses);

        const appetizers =  products.filter((item) => item.categories[0].name === 'APPETIZERS')
        
        setAppetizersArray(appetizers)

        const dessert =  products.filter((item) => item.categories[0].name === 'DESSERT')
    
        setDessertArray(dessert)

       const snacks =  products.filter((item) => item.categories[0].name === 'SNACKS')
        setSnacksArray(snacks)

       const drinks =  products.filter((item) => item.categories[0].name === 'DRINKS')

       setDrinksArray(drinks)
    
    }, [ products ])

    
   
  return (
    <MenuContainer>
        <MainMenu>
            <FoodSection id='section-1'>
                <h2>MAIN COURSES</h2>
                <FoodGrid>
                    {
                        maincoursesArray.map((product) => (
                            <FoodCard key={ product.id }>
                                <div className="image">
                                    <img src={ product.image.url } alt="rice frame" />
                                </div>
                                <div className="card-description">
                                    <p>{ product.name }</p>
                                    <p>{ product.price.formatted_with_symbol }</p>
                                </div>
                            </FoodCard>
                        ))
                    }
                    
                    
                </FoodGrid>
            </FoodSection>

            <FoodSection id='section-2'>
                <h2>APPETIZERS</h2>
                <FoodGrid>                    
                {
                        appetizersArray.map((product) => (
                            <FoodCard key={ product.id }>
                                <div className="image">
                                    <img src={ product.image.url } alt="rice frame" />
                                </div>
                                <div className="card-description">
                                    <p>{ product.name }</p>
                                    <p>{ product.price.formatted_with_symbol }</p>
                                </div>
                            </FoodCard>
                        ))
                    }
                    
                </FoodGrid> 
            </FoodSection>

            <FoodSection id='section-3'>
                <h2>DESSERTS</h2>
                <FoodGrid>                    

                {
                    dessertArray.map((product) => (
                        <FoodCard key={ product.id }>
                            <div className="image">
                                <img src={ product.image.url } alt="rice frame" />
                            </div>
                            <div className="card-description">
                                <p>{ product.name }</p>
                                <p>{ product.price.formatted_with_symbol }</p>
                            </div>
                        </FoodCard>
                    ))
                    }
                </FoodGrid> 
            </FoodSection>

            <FoodSection id='section-4'>
                <h2>SNACKS</h2>
                <FoodGrid>                    
                {
                        snacksArray.map((product) => (
                            <FoodCard key={ product.id }>
                                <div className="image">
                                    <img src={ product.image.url } alt="rice frame" />
                                </div>
                                <div className="card-description">
                                    <p>{ product.name }</p>
                                    <p>{ product.price.formatted_with_symbol }</p>
                                </div>
                            </FoodCard>
                        ))
                    }
                    
                </FoodGrid> 
            </FoodSection>

            <FoodSection id='section-5'>
                <h2>DRINKS</h2>
                <FoodGrid>                    

                {
                        drinksArray.map((product) => (
                            <FoodCard key={ product.id }>
                                <div className="image">
                                    <img src={ product.image.url } alt="rice frame" />
                                </div>
                                <div className="card-description">
                                    <p>{ product.name }</p>
                                    <p>{ product.price.formatted_with_symbol }</p>
                                </div>
                            </FoodCard>
                        ))
                    }
                </FoodGrid> 
            </FoodSection>
        </MainMenu>
        <Sidebar items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current" offset={ 2 }>
            <a href="#section-1">MAIN COURSES</a>
            <a href="#section-2">APPETIZERS</a>
            <a href="#section-3">DESSERTS</a>
            <a href="#section-4">SNACKS</a>
            <a href="#section-5">DRINKS</a>
        </Sidebar>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`

    padding: 4rem 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media screen and (max-width: 768px) {

        padding: 1.3rem 1.3rem;
        flex-direction: column;
    }

    
`

const FoodSection = styled.div`

    margin-bottom: 3rem;

`

const MainMenu = styled.div`

    width: 75%;

    @media screen and (max-width: 768px) {
    
        width: 100%;
        margin-bottom: 3rem;
    }

    h2 {

        margin-bottom: 2rem;
    }

`

const Sidebar = styled(Scrollspy)`
    align-self: flex-start;
    width: 20%;
    position: sticky;
    top: 20%;
    left: 0;
    bottom: 5%;
    right: 0;
    z-index: 90000;

    a {
        font-size: 1.2rem;
        cursor: pointer;
        margin-bottom: 1.2rem;
        font-weight: 500;
        display: block;
        text-decoration: none;
        color: grey;

    }

    p{
        a{
        }
    }

    .is-current{
        font-size: 1.25rem;
        color: black;
        transition: all 0.45s ease-in-out;
        
    }

    @media screen and (max-width: 768px) {
    
        width: 100%;
        position: static;

    }

`

const FoodGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    width: 100%;
    height: 100%;
    grid-gap: 2rem;

`

const FoodCard = styled.div`

    cursor: pointer;
    transition: all 0.55s ease-in-out;
    padding: 0.5rem 0.5rem;
    line-height: 1.4rem;
    
    
    img {
        width: 100%;
        height: 15rem;
        object-fit: cover;
        transition: all 0.55s ease-in-out;
        
    }

    .image {
        overflow: hidden;
        margin-bottom: .6rem;
    }

    .card-description {
        p{
            font-weight: bold;
        }
    }


    &:hover {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
        
        img {
            transform: scale(1.1);
            transition: all 0.55s ease-in-out;
            
        }
    
    }
`

export default MenuGrid