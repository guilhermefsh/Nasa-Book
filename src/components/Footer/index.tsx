
import { FooterContainer, Icons, LinksPages } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <FooterContainer>
            <span>Nasa<strong>Book</strong></span>


            <nav>
                <LinksPages>
                    <li>Galeria</li>
                    <li>Projeto mars</li>
                    <li>SOBRE</li>
                </LinksPages>
            </nav>


            <Icons>
                <a href='#'><FaGithub size={40} /></a>
                <a href='#'><FaLinkedin size={40} /></a>
            </Icons>
        </FooterContainer>
    )
}
