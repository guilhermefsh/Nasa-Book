import styled from "styled-components";

export const GalleryContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
    h2{
        margin-top:1rem;
        font-size:2rem;
        text-align:center;
    }
    
    form{
        margin: 1rem 0rem;

        input{
            background-color:transparent;
            border:3px solid ${props => props.theme['dark-purple']};
            color:${props => props.theme.white};
            font-weight:bold;
            font-size:1rem;
            border-radius:20px;
            text-transform:uppercase;
            padding:0.5rem;

            &::-webkit-calendar-picker-indicator {
                filter: invert(1); 
                }
        }
        button{
            margin: 0 .5rem;
        }
    }
`

export const MainContent = styled.main`
    display:flex;
    justify-content:center;
    gap:30px;
    padding:1.5rem;
    flex-wrap:wrap;
    
    picture{
        margin: 0 0 0 1.5rem;

        img{
            border-radius: 25px 25px 0 0;
            width:100%;
            width:200px;
            height:200px;
            cursor:pointer;
        }

        figcaption{
            padding:1rem;
            background-color:${props => props.theme['light-purple']};
            margin-top:-0.2rem;
            text-align:center;
            max-width:200px;
            height:90px;
            border-radius: 0 0 20px 20px;
        }
    }

    strong{
        margin:5rem 0;
        font-size:1.5rem;
        padding:1rem;
    }

    @media (max-width:1024px) {
        
    }
`
