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
            width:500px;
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
    @media (max-width:590px) {
        figure{
            img{
                width:400px;
            }
        }
    }

`

export const InfoContainer = styled.div`
    width:500px;
    max-height:500px;
    display:flex;
    text-align:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
    overflow-y:scroll;
    

    h3{
        font-size:2.5rem;
        font-weight:bold;
    }

    &::-webkit-scrollbar{
        display:none;
    } 

    @media (max-width:1070px) {
            p{
                text-align:center;
                max-width:300px;
            }
        }

    @media (max-width:500px) {
        h3{
            font-size:1.7rem
        }
    }
`