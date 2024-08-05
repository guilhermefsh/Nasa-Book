import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body{
    background-color:#000;
   color:${props => props.theme.white};
}

body, input-security, textarea, button{
    font-family: 'Jura', sans-serif;
    font-size:1rem;
}

ul{
    list-style:none;
}

fieldset{
    border:none;
}
`