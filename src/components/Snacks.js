import React from 'react';
import styled from 'styled-components';
import doughnut from '../images/doughnut.jpg'

const Snack = () => {
    return ( 
        <StyledSnack>
            <div className="snack-overlay">
                <div className="snack-section">
                    <h1>SAVE 40% OFF</h1>
                    <p>Tasty snacks. On Big Stock, Big Offers</p>
                    <p>BIG OFFER</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </StyledSnack>
     );
}
 
export default Snack;


const StyledSnack = styled.div `

    min-height : 75vh;
    background-image: url( ${ doughnut }) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    background-attachment: fixed;
    position: relative;
    width: 100%;

    /* overlay */

    .snack-overlay {
        position: absolute;
        top:0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);

        .snack-section {
        margin-left: -8rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        
        h1 {
            font-family: 'Paytone One', sans-serif;
            font-size: 5vw;
            margin-bottom: 1rem; 
        }

        h1 + p {
            background-color: grey;
            padding: 1rem;
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        p + p {
            text-align: center;
            font-size: 4rem;
            margin-bottom: 1rem;
        } 

        button {
            padding: 0.8rem 2rem;
            outline: none;
            font-size: 1.1rem;
            background-color: white;
            border: none;
            color: black;
            cursor: pointer;
        }
    }
    }

    @media screen and (max-width: 768px) {
        .snack-section {
            margin: 0rem !important;
            align-items: center  !important;
            
           

            h1 {
            /* font-size: 1.5rem !important; */
            margin-bottom: 1rem; 
        }

        h1 + p {
            background-color: grey;
            padding: 1rem;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }

        p + p {
            text-align: center;
            font-size: 2rem !important;
            margin-bottom: 1rem;
        } 

        button {
            padding: 0.8rem 2rem;
            border: none;
            font-size: 1.1rem;
            background-color: white;
            border: none;
            color: black;
            cursor: pointer;
        }

        }
    }    

`
