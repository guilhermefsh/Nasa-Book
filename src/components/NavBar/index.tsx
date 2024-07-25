import { Header, NavBarContainer, NavMenuContainer } from "./styles"
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import logo from '../../assets/images/NasaBook.svg'


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Header>
            <NavBarContainer>
                <ul>
                    <li><NavLink to="/marsrover">Mars Rover</NavLink></li>
                    <li>
                        <Link to='/'>
                            <img src={logo} alt="NasaBook" />
                        </Link>
                    </li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
            </NavBarContainer>

            <NavMenuContainer isOpen={isOpen}>
                <Link to='/'>
                    <img src={logo} alt="NasaBook" />
                </Link>
                <i onClick={toggleMenu}><GiHamburgerMenu size={40} /></i>
                <ul>
                    <li><NavLink to="/marsrover">Mars Rover</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
            </NavMenuContainer>
        </Header>
    )
}
