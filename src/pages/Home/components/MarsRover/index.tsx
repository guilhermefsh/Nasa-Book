import { MarsRoversContainer, MarsRoversContent } from "./styles"
import MarsRoverImg from '../../../../assets/images/MarsRover.png'
import Tilt from 'react-parallax-tilt'
import { Link } from "react-router-dom"

export const MarsRover = () => {
    return (
        <MarsRoversContainer>
            <h4>CONHEÇA O MARS  ROVER!</h4>
            <MarsRoversContent>
                <div>
                    <span>EXPLORE O <strong>MARS ROVER</strong>!</span>
                    <p>Descubra as maravilhas de Marte com o Mars Rover! Esta seção oferece
                        uma visão incrível das explorações realizadas pelos rovers da NASA no
                        planeta vermelho. Conheça mais sobre a superfície marciana, as descobertas
                        científicas e a tecnologia inovadora que torna essas missões possíveis.
                        Clique no link abaixo e mergulhe nas aventuras interplanetárias que
                        expandem nossos horizontes e aumentam nosso conhecimento sobre o
                        universo.
                    </p>
                    <Link to="/marsrover">EXPLORAR MARTE!</Link>
                </div>
                <figure>
                    <Tilt><img src={MarsRoverImg} alt="Foto retirada na missão mars rovers" /></Tilt>
                </figure>
            </MarsRoversContent>
        </MarsRoversContainer>
    )
}
