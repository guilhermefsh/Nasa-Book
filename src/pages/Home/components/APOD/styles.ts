import styled from "styled-components";
export const ApodContainer = styled.section`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});

    figure{
        img{
            width:100%;
            max-width:400px;
            height:auto;
            filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
            border-radius:20px;
        }
    }

    @media (max-width:600px) {
        figure{
            img{
                max-width:340px;
            }
        }
    }
`

export const SearchApod = styled.div`
    display:flex;
    flex-direction:column;
    gap:14px;

    h4{
        font-size:2.3rem;
        filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
    }
    
    form{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:20px;

        input{
            background-color:transparent;
            border:3px solid ${props => props.theme['dark-purple']};
            color:${props => props.theme.white};
            font-weight:bold;
            font-size:1.2rem;
            border-radius:20px;
            text-transform:uppercase;
            padding:0.5rem;

            &::-webkit-calendar-picker-indicator {
                filter: invert(1); 
                }
        }
        button{
            background-color:transparent;
            color:${props => props.theme.white};
            border:3px solid ${props => props.theme['dark-purple']};
            border-radius:20px;
            text-transform:uppercase;
            padding:0.5rem;
            width:100px;
            cursor: pointer;

            &:hover{
                background-color:${props => props.theme['light-purple']};
                font-size:bold;
            }
        }
    }

    @media(max-width:600px){
        h4{
            font-size:1.5rem;
        }
    }
`

export const InfoApodContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h4{
        font-size:1.5rem;
    }

    p{
        width:100%;
        max-width:1100px;
        padding:0.5rem;
    }

   h4,p{
    text-align:center;
    margin: 10px 0;
   }

   @media(max-width:600px){
        p{
            padding:1rem;   
        }
    }
`