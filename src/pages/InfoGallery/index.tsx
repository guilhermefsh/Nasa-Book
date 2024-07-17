import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { InfoContainer, InfoGContainer, SectionContainer } from './styles';
import Tilt from 'react-parallax-tilt';
import { formatDate } from '../../utils/formatDate';

export const InfoGallery = () => {
    const { nasa_id } = useParams();
    const { infoGallery, photosData } = useContext(BookContext);

    useEffect(() => {
        infoGallery(nasa_id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nasa_id]);

    return (
        <SectionContainer>
            {photosData.map((photo, index) => (
                <InfoGContainer key={index}>
                    <figure>
                        <Tilt><img src={photo.links[0].href} alt={photo.data[0].title} /></Tilt>
                    </figure>
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
