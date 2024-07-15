import { NavLink } from 'react-router-dom'
import { FooterContainer, Icons, LinksPages } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <FooterContainer>
            <span>Nasa<strong>Book</strong></span>

            <nav>
                <LinksPages>
                    <li><NavLink to="Gallery">Gallery</NavLink></li>
                    <li><NavLink to="MarsRover">Project Mars Rover</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                </LinksPages>
            </nav>


            <Icons>
                <a href='#'><FaGithub size={40} /></a>
                <a href='#'><FaLinkedin size={40} /></a>
            </Icons>
        </FooterContainer>
    )
}
