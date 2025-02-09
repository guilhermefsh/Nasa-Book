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

    @media (max-width:800px) {
        h1{
            text-align:center;
        }
    }
`

export const SeeMore = styled.div`
    p{
        margin-top:-20px;
        text-align:center;
        text-transform:uppercase;
    }
`