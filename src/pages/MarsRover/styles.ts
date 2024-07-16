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
`

export const MarsRoverInfo = styled.div`
    display:flex;
    align-items:center;
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
`

