import { Header, NavBarContainer } from "./styles"
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Header>
            <NavBarContainer>
                <ul>
                    <li><NavLink to="/sobre">About</NavLink></li>
                    <li>
                        <Link to='/'><span>Nasa<strong>Book</strong></span></Link>
                    </li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
            </NavBarContainer>
        </Header>
    )
}
