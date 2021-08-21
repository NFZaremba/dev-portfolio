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
    }

    // Gallery
    .gallery {
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .gallery-controls {
        display: flex;
        position: absolute;
        align-items: center;
        left: 50%;
        margin: auto;
        transform: translate(-50%, -50%);
        bottom: -12px;
        
        @media (max-width: 800px){
            bottom: -18px;
        }

        @media (max-width: 420px){
            bottom: -30px;
        } 
    }
    .next, .prev {
        display: flex;
        cursor: pointer;
        margin: .5rem;
        flex: 1;
        &:hover {
            background: hsl(0deg 0% 29% / 21%);
            box-shadow: 0 0px 15px -6px rgb(255 255 255 / 40%);
            transition: 0.4s;
        }
        i {
            color: #fff;
            font-size: 2.1rem;
        }

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

    // Page Indicators
    .page-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #c1b;
        flex: 1;
        margin: .5rem;
        opacity: 0.3;
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

    // Parallax testing
    .parallax {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: cover;
        /* overflow: hidden; */
    }

    .stars, .twinkling {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        width:100%;
        height: 30rem;
        display:block;
    }
    .stars {
        background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
        z-index: -5;
    }

    /* .twinkling{
        background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
        z-index: -4;

        -moz-animation:move-twink-back 200s linear infinite;
        -ms-animation:move-twink-back 200s linear infinite;
        -o-animation:move-twink-back 200s linear infinite;
        -webkit-animation:move-twink-back 200s linear infinite;
        animation:move-twink-back 200s linear infinite;
    }

    @keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    } */
`;

export default GlobalStyle;
