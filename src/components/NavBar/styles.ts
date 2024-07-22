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
        /* li{
            font-size:1.1rem;
        }
        
        span{
            font-size:1.7rem;
        } */

            display:none;
    }
`

interface NavMenuContainerProps {
    isOpen: boolean;
}

export const NavMenuContainer = styled.nav<NavMenuContainerProps>`
    display:flex;
    align-items:center;
    justify-content:space-around;
    background:transparent;
    width:1120px;
    margin-top:1.5rem;
    border: 2px solid ${props => props.theme['dark-purple']};
    border-radius:20px;
    padding:1rem;
    position: relative;

    @media (min-width:500px) {
        display:none;
    }

    i{
        cursor: pointer;
    }

    ul{
        display: ${props => (props.isOpen ? 'flex' : 'none')};
        position:absolute;
        justify-content:right;
        margin-right:20px;
        width:230px;
        border-radius:14px;
        top:64px;
        right:20px;
        gap:20px;
        font-size:1.2rem;
        border-bottom: solid ${props => props.theme['dark-purple']};
        padding:1rem;
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
        span{
            font-size: 2rem;
        }
        strong{
            color:${props => props.theme['dark-purple']}
        }    
`