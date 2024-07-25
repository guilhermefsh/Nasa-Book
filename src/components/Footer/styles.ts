import styled from "styled-components";

export const FooterContainer = styled.footer`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:20px;
    padding:1rem;
    border-top:3px solid ${props => props.theme['dark-purple']};
    filter: drop-shadow(4px 4px 5px ${props => props.theme.black});

    figure{
        margin-left:1.6rem;
        img{
            width:160px;
            height:50px;
        }
    }
`

export const LinksPages = styled.ul`
    display:flex;
    text-transform:uppercase;
    li{
        margin:0 1rem;
        color:#A9A9A9;
    }
    a{
        text-decoration:none;
            color:${props => props.theme['light-gray']};
            
            &:hover{
            border-bottom:3px solid ${(props) => props.theme['dark-purple']}
            }

            &.active{
            color:${(props) => props.theme.white};
            }
    }
`

export const Icons = styled.div`
    display:flex;
    gap:20px;
    a{
        color:${props => props.theme['light-purple']};

        &:hover{
            color:${props => props.theme['dark-purple']}
        }
    }
`
