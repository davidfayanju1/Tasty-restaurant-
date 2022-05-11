import React from 'react';
import styled from 'styled-components';
import cake from '../../images/cake.jpg';
import rolls from '../../images/roll.jpg' ;


const SnackIntro = () => {
    return ( 

        <StyledSnackIntro>
            <StyledSnackIntroHeader>
                 <h1>WELCOME, TO <span>SNACK.</span></h1>
                 <p>Surprise! we sell snacks too. You shouldn't go too far, what you want in a snack? We got it!</p>
            </StyledSnackIntroHeader>

            <StyledSnackIntroImages>
                <div className="snack-intro-image">
                    <img src={ cake } alt="walking sitting" />
                </div>

                <div className="snack-intro-image">
                    <img src={ rolls } alt="special roll" />
                </div>
            </StyledSnackIntroImages>
        </StyledSnackIntro>
     );
}
 

const StyledSnackIntro = styled.div`

        min-height: 70vh;
        width: 100%;
        background-color: rgb(243, 243, 243);
        padding: 4rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;


        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            justify-content: center;
        }

`
const StyledSnackIntroImages = styled.div`

        width: 60%;
        display: flex;
        /* overflow: hidden; */

        img {
            height: 100%;
            width: 100%;
            transition: transform 5s ease-in-out;
            cursor: pointer;
            object-fit: cover;
        }

        .snack-intro-image {
            width: 45%;
            height: 100%;
            overflow: hidden;
        }

        img:hover {
            transform : scale(1.5);
        }

        .snack-intro-image + .snack-intro-image {
            margin-top: 5rem;
            margin-left: 2rem;
        }

        @media screen and (max-width: 768px) {
            
            width: 100%;
            margin-bottom: 3rem;

            .snack-intro-image {
                width: 50%;
            }

            .snack-intro-image + .snack-intro-image {
                margin-top: 0rem;
                margin-left: 2rem;
            }

        }

        @media screen and (max-width: 390px) {
            flex-direction: column;

            .snack-intro-image {
                width: 100%;
            }

            .snack-intro-image + .snack-intro-image {
                margin-left: 0rem;
            }

        }


`

const StyledSnackIntroHeader = styled.div`

    width: 35%;
    margin-left: 3rem;
    text-align: center;

    span {
        font-family: 'Lobster', cursive;
        /* font-size: 1.7rem; */
    }

    h1 {
        margin-bottom: 2rem;
        font-size: clamp(1.7rem, 2.5vw, 4rem);
    }

    p{
        color: grey;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: 0rem;
    }

`

export default SnackIntro;