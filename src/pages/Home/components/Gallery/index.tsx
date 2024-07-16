import { GalleryContainer, GalleryContent, GalleryInfo, Image, ImageStyleColumn, ImageStylez } from "./styles"
import Tilt from 'react-parallax-tilt'
import Galaxy from '../../../../assets/images/galaxy1.png'
import Galaxy2 from '../../../../assets/images/galaxy2.png'
import Galaxy3 from '../../../../assets/images/galaxy3.png'
import Galaxy4 from '../../../../assets/images/galaxy4.png'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Gallery = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <GalleryContainer>
            <div>
                <h3>Veja a Galeria de <span>fotos oficiais da nasa!</span></h3>
            </div>
            <GalleryContent>
                <Image>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 2 }}
                    >
                        <ImageStylez>
                            <Tilt><img src={Galaxy} alt="Satélite na Galáxia" /></Tilt>
                            <Tilt><img src={Galaxy3} alt="Cosmos na galáxia" /></Tilt>
                        </ImageStylez>
                        <ImageStyleColumn>
                            <Tilt><img src={Galaxy2} alt="Estrelas na Galáxia" /></Tilt>
                            <Tilt><img src={Galaxy4} alt="Estrelas na Galáxia" /></Tilt>
                        </ImageStyleColumn>
                    </motion.div>
                </Image>
                <GalleryInfo>
                    <span>Explore as <strong>Galáxias!</strong></span>
                    <p>
                        Para nós que amamos explorar o vasto e infinito universo, esta galeria oferece
                        uma experiência única de observar imagens reais capturadas pela NASA.
                        Clique no link abaixo e deixe-se maravilhar pela beleza e mistério do cosmos.
                    </p>
                    <Link to="/gallery">Explore a Galáxia!</Link>
                </GalleryInfo>
            </GalleryContent>
        </GalleryContainer>
    )
}
