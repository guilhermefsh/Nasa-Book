import { NavLink } from 'react-router-dom'
import { FooterContainer, Icons, LinksPages } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../../assets/images/NasaBook.svg'

export const Footer = () => {
    return (
        <FooterContainer>
            <figure>
                <img src={logo} alt="NasaBook" />
            </figure>

            <nav>
                <LinksPages>
                    <li><NavLink to="Gallery">Gallery</NavLink></li>
                    <li><NavLink to="MarsRover">Project Mars Rover</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                </LinksPages>
            </nav>


            <Icons>
                <a
                    href='https://github.com/guilhermefsh'
                    target='_blank'
                >
                    <FaGithub size={40} />
                </a>

                <a
                    href='https://www.linkedin.com/in/guilhermefsh/'
                    target='_blank'
                >
                    <FaLinkedin size={40} />
                </a>
            </Icons>
        </FooterContainer>
    )
}
