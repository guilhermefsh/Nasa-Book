import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Footer } from '../components/Footer'

export const DefaultLayout = () => {
    return (
        <LayoutContainer>
            <NavBar />
            <Outlet />
            <Footer />
        </LayoutContainer>
    )
}
