import styled from "styled-components";

export const PageNotFoundContainer = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: -1rem 0;
    gap:80px;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});

    a{
        text-decoration:none;
        color:${props => props.theme.white};
        border:3px solid ${props => props.theme['light-purple']};
        border-radius:20px;
        padding:1rem;
    }
`

export const Info = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:1rem;
    h5{
        font-size:2.5rem;
    }
`