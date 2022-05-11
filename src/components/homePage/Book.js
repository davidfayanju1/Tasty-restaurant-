import React from 'react';
import styled from 'styled-components';
import mae from '../../images/mae.jpg';

const Book = () => {
    return ( 

        <StyledBook>
            <div className="booking-card">
                <div className="card-image">
                    <img src={ mae } alt="card image" />
                </div>
                <div className="card-text">
                    <h1>WORK HOURS.</h1>
                    <p>Open from Sunday to Saturday from 8:00 to 22:00 WAT.</p>
                    <button>BOOK YOUR TABLE</button>
                </div>
            </div>
        </StyledBook>
     );
}


const StyledBook = styled.div`

    height: 70vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5rem 0rem;


    

    .booking-card {
        display: flex;
        background-color: rgb( 243, 243, 243);
        width: 75%;
        height: 50vh;
        align-items: center;
        justify-content: center;


        .card-image {
        width: 50%;
        height: inherit;
        overflow: hidden;
    }

    .card-text {
        width: 50%;
        margin-left: 2rem;

        h1 {
            font-family: 'Paytone One', sans-serif;
            margin-bottom: 1.5rem;
        }

        p {

            font-size: 1.1rem;
            margin-bottom: 1.4rem;
        }

        button {
            background-color: transparent;
            color: black;
            border: black 1px solid;
            padding: 0.9rem 3rem;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: color 0.3s ease-in-out;
        }

        button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: black;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease-in-out;
        }

        button:hover::before{
            transform: scaleX(1);
        }

        button:hover {
            color: rgb(243, 243, 243);
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 4s ease-in-out;
    }

    img:hover {
        transform: scale(1.4);
    }


        @media screen and (max-width: 768px) {

            flex-direction: column;
            height: 60vh;
            .card-image {
                width: 100%;
            }

            .card-text {
                width: 100%;
                padding: 2rem;
            }

        }
    }

    
`
 
export default Book;