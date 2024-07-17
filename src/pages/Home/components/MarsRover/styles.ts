import styled from "styled-components";

export const MarsRoversContainer = styled.section`
    height: auto;
    margin-top:4rem;
    margin-bottom:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:80px;
    padding:1rem;
    flex-direction:column;
    h4{
        font-size:2.5rem;
        font-weight:bold;
        filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
    }
    @media(max-width:884px){

        h4{
            font-size:2.3rem;
            text-align:center;
            margin-bottom:12rem;
        }

        div{
            margin-top:-5rem;
        }
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

    @media(max-width:884px){
        div{
            figure{
                max-width:200px;
            }
        }
        flex-direction:column-reverse;
    }
    @media(max-width:504px){
        figure{
            padding:1rem;
            width:400px;
        }
        }
`
