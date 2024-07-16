import MarsRoverRobot from '../../assets/images/MarsRover.png'
import { SearchMR } from './components/SearchMR'
import { MarsRoverContainer, MarsRoverInfo } from './styles'
import Tilt from 'react-parallax-tilt'
export const MarsRover = () => {
    return (
        <MarsRoverContainer>
            <h2>MARS ROVER</h2>
            <MarsRoverInfo>
                <div>
                    <span>O que é?</span>
                    <p>
                        Um Mars Exploration Rover é um veículo robótico americano
                        projetado para explorar o planeta vermelho. Este veículo está
                        equipado com diversos dispositivos de alta tecnologia, incluindo
                        câmeras, microscópio, espectrômetros de raios gama, infravermelho
                        e partículas alfa e uma ferramenta de retificação de pedra.
                    </p>
                    <p>
                        O principal objetivo de um rover de exploração de Marte é estudar a
                        composição física e química de várias superfícies do Planeta Vermelho para determinar
                        se a vida é possível ali. Para fazer isso, o rover de Marte analisa solo, poeira e rochas
                        ao redor de sua área de pouso e de outras áreas do planeta.
                    </p>
                    <p>
                        Cada rover possui seu próprio conjunto de fotos armazenadas no banco de dados, que podem
                        ser consultadas separadamente. Existem várias consultas possíveis que podem ser feitas na API, aqui no NasaBook,
                        a seleção de fotos é a partir do estilo câmera.
                    </p>
                </div>
                <figure>
                    <Tilt>
                        <img src={MarsRoverRobot} alt="Robo Mars Rover explorando marte" />
                    </Tilt>
                </figure>
            </MarsRoverInfo>
            <SearchMR />
        </MarsRoverContainer>
    )
}
