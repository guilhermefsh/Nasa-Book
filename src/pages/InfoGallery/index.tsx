import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { InfoContainer, InfoGContainer, SectionContainer } from './styles';
import { formatDate } from '../../utils/formatDate';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export const InfoGallery = () => {
    const { nasa_id } = useParams();
    const { infoGallery, photosData } = useContext(BookContext);

    useEffect(() => {

        if (nasa_id) {
            infoGallery(nasa_id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nasa_id]);

    return (
        <SectionContainer>
            {photosData.map((photo, index) => (
                <InfoGContainer key={index}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <figure>
                            <Tilt><img src={photo.links[0].href} alt={photo.data[0].title} /></Tilt>
                        </figure>
                    </motion.div>
                    <InfoContainer>
                        <h3>{photo.data[0].title}</h3>
                        <span>{formatDate(photo.data[0].date_created)}</span>
                        <p>{photo.data[0].description}</p>
                    </InfoContainer>
                </InfoGContainer>
            ))}
        </SectionContainer>
    );
};
