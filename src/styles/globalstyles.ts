import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:focus{
    outline:0;
    box-shadow:0 0 0 2px ${props => props.theme['light-purple']};
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