import styled from "styled-components"
import { ButtonProps } from "../../interfaces/Button"

const ButtonStyle = styled.button`
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
`

export const ButtonComponent = ({ children, ...props }: ButtonProps) => {
    return (
        <ButtonStyle{...props}>{children}</ButtonStyle>
    )
}
