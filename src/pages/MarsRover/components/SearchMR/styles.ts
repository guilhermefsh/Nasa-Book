import styled from "styled-components";

export const FormContainer = styled.form`
    margin: 4.5rem 0;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:40px;

    input[type=range]{
        appearance: none;
        -webkit-appearance: none;
        background-color:transparent;
        border:3px solid ${props => props.theme['dark-purple']};
        color:${props => props.theme.white};
        border-radius:20px;
        padding:0.5rem;
        }

    input[type=range]::-webkit-slider-runnable-track {
        background-color: ${props => props.theme['dark-purple']};
        height: 1rem;
        border-radius: 20px;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1rem; 
        height: 1rem;
        background-color: ${props => props.theme['dark-purple']};
        border: 3px solid ${props => props.theme["light-gray"]};
        border-radius: 50%;
        cursor: pointer;
    }

        button{
            background-color:transparent;
            color:${props => props.theme.white};
            border:3px solid ${props => props.theme['dark-purple']};
            border-radius:20px;
            text-transform:uppercase;
            padding:0.5rem;
            width:100px;
            font-size:1.2rem;
            cursor: pointer;

            &:hover{
                background-color:${props => props.theme['light-purple']};
                font-size:bold;
            }
        }

        select{
            background-color:transparent;
            border:3px solid ${props => props.theme['dark-purple']};
            color:${props => props.theme.white};
            text-align:center;
            font-weight:lighter;
            font-size:1.2rem;
            border-radius:20px;
            text-transform:uppercase;
            padding:0.5rem;
        }

        select option{
            background-color:${props => props.theme['dark-purple']};
            padding:1rem;
        }

        @media (max-width:754px) {
            flex-direction:column;
        }
`

export const SunDistance = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin-top:2.5rem;
    align-items:center;
    @media (max-width:754px) {
            input{
                width:400px;
            }
        }
`

export const MarsImages = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;

    figure{
        margin: 1rem 1rem 1rem 1.7rem;
        img{
            height:280px;
            width:300px;
            border-radius: 25px 25px 0 0;
        }

        figcaption{
            border-radius: 0 0 25px 25px;
            text-align:center;
            padding:1rem;
            margin-top:-10px;
            background-color:${props => props.theme['dark-purple']}
        }
    }

`