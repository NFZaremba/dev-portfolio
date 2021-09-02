import { createGlobalStyle } from "styled-components";
import "remixicon/fonts/remixicon.css";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px) {
            font-size: 75%
        }
    }

    body {
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
        position: relative;
        background-color: hsl(206, 4%, 6%);
    }

    h2 {
        color: #fff;
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    p {
        color: #fff;
        line-height: 26px;
 
    }

    // Overrides
    #fp-nav.fp-left {
        padding-left: 2rem;
        animation: fadeIn 3s;

        @keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }

        @media (max-width: 1300px) {
            width: auto;
            top: auto;
            left: 50%;
            bottom: 32px;
            transform: translate3d(-50%, 0, 0);
        }
    }

    // Full-Page nav
    #fp-nav ul {
        @media (max-width: 1300px) {
            display: flex;
            align-items: flex-end;
        }
    }


    #fp-nav ul li {
        height: 3px;
        margin: 0 0 40px;

        @media (max-width: 1300px) {
            height: auto;
            margin: 0 28px;
        }

        @media screen and (max-width: 420px) {
            margin: 0 12px;
        }
    }

    #fp-nav ul li .active {
        width: 40px;
        background-color: #c1b;

        @media (max-width: 1300px) {
            width: 3px;
            height: 40px;
        }
    }

    #fp-nav ul li a {
        width: 24px;
        height: 100%;
        background: #fff;
        transition: .3s; 

        @media (max-width: 1300px) {
            width: 3px;
            height: 24px;
        }

        @media (max-width: 420px){ 
            width: 2px;
            height: 16px;
        }
    }

    #fp-nav ul li a span {
        display: none;
    }

    // Media Queries
    @media (max-width: 420px) {
    p {
        line-height: 20px;
    }
  }
`;

export default GlobalStyle;
