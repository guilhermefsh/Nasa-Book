import styled from "styled-components";

export const AboutContainer = styled.main`
    margin: 12rem 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px;

`

export const AboutInfo = styled.div`
    text-align:center;
    max-width:600px;

    h4{
        font-size:2.5rem;
    }
`

export const AboutLinks = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    span{
        font-size:2.5rem;
    }

    a{
        text-decoration:none;
        color:${props => props.theme['light-gray']};

        &:hover{
            text-decoration:underline ${props => props.theme['light-purple']};
        }
    }
`