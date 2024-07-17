import styled from "styled-components";

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    padding:1rem;
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});
`

export const NavBarContainer = styled.nav`
    background:transparent;
    width:1120px;
    margin-top:1.5rem;
    border: 2px solid ${props => props.theme['dark-purple']};
    border-radius:20px;
    padding:1rem;
        ul{
            display:flex;
            justify-content:space-between;
            align-items:center;
            font-weight:bold;
        }
        li{
            font-size:1.2rem;
        }
        span{
            font-size: 2rem;
        }
        strong{
            color:${props => props.theme['dark-purple']}
        }

        a{
            text-decoration:none;
            color:${props => props.theme.white};
            
            &:hover{
            border-bottom:3px solid ${(props) => props.theme['dark-purple']}
            }

            &.active{
            color:${(props) => props.theme['dark-purple']};
            }
        }

    @media(max-width: 500px)  {
        li{
            font-size:1.1rem;
        }
        
        span{
            font-size:1.7rem;
        }
    }

`