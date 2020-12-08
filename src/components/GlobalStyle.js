import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
   }

   body{
       background: #1b1b1b;
       font-family: 'Inter', sans-serif;
       /* font-family: 'Lobster', cursive; */
   }

   button{
       font-weight: bold;
       cursor: pointer;
       font-size: 1.1rem;
       padding: 1rem 2rem ;
       border: 3px solid #23d997;
       background: transparent;
       color: white;
       transition: all 0.5s ease;
       &:hover{
           background-color: #23d997;
           color: white;
       }
    }
       h2{
           font-weight: lighter;
           font-size: 3rem;
           padding-bottom: 0.3rem
       }
       h3{
           color: white;
       }
       h4{
           font-size: 2rem;
           font-weight: bold;
       }
       span{
           font-weight:bold;
           color: #23d997;
           font-size: 3.2rem;
       }
       p{
           padding: 3rem 0rem;
           color: #ccc;
           font-size: 1.2rem;
           line-height: 150%;
       }
       a{
           font-size: 1.1.rem;
       }

`

export default GlobalStyle;