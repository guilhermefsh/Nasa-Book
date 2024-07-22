import styled from "styled-components";

export const MarsRoverContainer = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:1.3rem;
    filter: drop-shadow(8px 8px 8px ${props => props.theme.black});

    h2{
        text-align:center;
        font-size:2.5rem;
        font-weight:bold;
    }
    @media(max-width:500px){
        h2{
            margin-top:2rem;
        }
    }
`

export const MarsRoverInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1rem;
    gap:80px;
    div{
        text-align:center;
        max-width:600px;

        p{
            margin-bottom:1rem;
        }

        span{
            font-size:2.5rem;
            text-transform:uppercase;
            font-weight:bold;
        }

        figure{
            img{
                filter: drop-shadow(8px 8px 8px ${props => props.theme.black});
            }
        }
    }

    @media (max-width:924px) {
        flex-direction:column-reverse;
    }
    @media (max-width:500px) {
        figure{
            img{
                width:330px;
            }
        }
    }
`

