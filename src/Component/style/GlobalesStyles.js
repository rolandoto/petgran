import styled, {createGlobalStyle} from 'styled-components'


export const GlobaleStyles =createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  
    }


    


    *,*:bofore,*:after {
        box-sizing: inherit;
    }


    ul,li,h1,h2,h3,padding,button {
        padding: 0;}
    ul {list-style:none}
    button {background:transparent;border:0;
    outline: 0;
    }

    body {
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
        width: 100%;

    }


    #root {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        overflow: hidden;
        min-height: 100vh;
        padding: 10px;
    }
`