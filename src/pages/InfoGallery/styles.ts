import styled from 'styled-components'

export const SectionContainer = styled.section`
    margin: 5rem 0;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
`

export const InfoGContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;

    figure{
        img{
            width:400px;
            border-radius:20px;
        }
    }
`

export const InfoContainer = styled.div`
    width:400px;
    text-align:center;
    display:flex;
    flex-direction:column;
    gap:10px;

    h3{
        font-size:2.5rem;
        font-weight:bold;
    }
`