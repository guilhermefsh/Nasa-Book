import styled from "styled-components";
export const HomeContainer = styled.div`
    padding:1rem;
    height: 100vh;
`
export const TitlePageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:80%;
    gap:10px;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});

    h1{
        font-weight:lighter;
        text-transform:uppercase;
    }
`

export const SeeMore = styled.div`
    p{
        text-align:center;
        text-transform:uppercase;
    }
`