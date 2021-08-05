import { createGlobalStyle } from "styled-components";

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
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
        position: relative;
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: white;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    a {
        text-decoration: none;
        color: #fff;
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
