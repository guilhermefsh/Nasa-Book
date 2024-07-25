import styled from 'styled-components'

export const SectionContainer = styled.section`
    margin: 5rem 0;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
`

export const InfoGContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:1rem;
    figure{
        
        img{
            width:100%;;
            max-width:500px;
            max-height:500px;
            border-radius:20px;
        }
    }
    @media (max-width:870px) {
        flex-direction:column;
        figure{
            margin-bottom:1.5rem;
        }
    }
`

export const InfoContainer = styled.div`
    width:100%;
    max-width:500px;
    padding:1rem;
    max-height:600px;
    display:flex;
    text-align:justify;
    align-items:center;
    flex-direction:column;
    gap:10px;
    overflow-y:scroll;
    

    h3{
        text-align:center;;
        font-size:2.5rem;
        font-weight:bold;
        word-wrap: break-word;
        word-break: break-word;
    }

    p{
        word-wrap: break-word;
        word-break: break-word;
    }

    &::-webkit-scrollbar{
        display:none;
    } 

    @media (max-width:1070px) {
            p{
                padding:1rem;
                width:100%;
                max-width:1100px;
            }
        }

    @media (max-width:500px) {
        h3{
            font-size:1.7rem;
            max-width:350px;
        }

        p{
            text-align:justify;
            max-width:350px;
        }
    }
`