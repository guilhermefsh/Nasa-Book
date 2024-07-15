import styled from "styled-components";

export const MarsRoversContainer = styled.section`
    height: 100vh;
    margin-top:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:80px;
    flex-direction:column;
    h4{
        font-size:2.5rem;
        font-weight:bold;
        filter: drop-shadow(4px 4px 5px ${props => props.theme.black});

    }
`

export const MarsRoversContent = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap:100px;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});


    div{
        display:flex;
        flex-direction:column;
        gap:20px;
        text-align:center;
        max-width:800px;
        span{
            font-size:1.65rem;
        }

        strong{
            color:${props => props.theme['light-purple']}
        }

        p{
            max-width:500px;
        }
        
        a {
        font-size: 1.5rem;
        color: ${props => props.theme.white};
        background-color: transparent;
        border:2px solid ${props => props.theme['light-purple']};
        text-decoration:none;
        padding: 1rem;
        width: 100%;
        border-radius: 20px;
        cursor: pointer;
        filter: drop-shadow(4px 4px 5px ${props => props.theme.black});

        &:hover {
            background-color: ${props => props.theme['dark-purple']};
        }
    }
    }
`
