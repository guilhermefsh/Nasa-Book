import { MarsRoversContainer, MarsRoversContent } from "./styles"
import MarsRoverImg from '../../../../assets/images/MarsRover.png'
import Tilt from 'react-parallax-tilt'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const MarsRover = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

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
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2 }}
                    >
                        <Tilt><img src={MarsRoverImg} alt="Foto retirada na missão mars rovers" /></Tilt>
                    </motion.div>
                </figure>
            </MarsRoversContent>
        </MarsRoversContainer>
    )
}
