import React, { useContext, useState } from 'react';
import { GalleryContainer, MainContent } from './styles';
import Tilt from 'react-parallax-tilt';
import { BookContext } from '../../contexts/BookContext';
import { Item } from '../../interfaces/Api';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { ButtonComponent } from '../../components/button';

export const Gallery = () => {
    const { galleryData, searchGallery, loading } = useContext(BookContext);
    const [galleryImg, setGalleryImg] = useState('galaxy');
    const navigate = useNavigate()

    function handleSearchGallery(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        searchGallery(galleryImg);
    }

    function handleInfoImage(nasa_id: string) {
        navigate(`infogallery/${nasa_id}`)
    }

    return (
        <GalleryContainer>
            <h2>PESQUISE POR IMAGENS INCRÍVEIS!</h2>
            <form onSubmit={handleSearchGallery}>
                <input
                    type="text"
                    placeholder='galaxy'
                    required
                    onChange={(e) => setGalleryImg(e.target.value)}
                />
                <ButtonComponent type='submit'>Buscar</ButtonComponent>
            </form>
            <MainContent>
                {loading ? (
                    <Loader />
                ) : (
                    galleryData.length > 0 ? (
                        galleryData.filter(item => item.links && item.links.length > 0).map((item: Item) => {
                            const { data, links } = item;
                            const nasa_id = data?.[0]?.nasa_id ?? 'nasa_id_missing';
                            const title = data?.[0]?.title ?? 'Sem Título';
                            const imageUrl = links[0].href;

                            return (
                                <picture key={nasa_id} onClick={() => handleInfoImage(nasa_id)}>
                                    <Tilt>
                                        <img src={imageUrl} alt={title} />
                                        <figcaption>{title}</figcaption>
                                    </Tilt>
                                </picture>
                            );
                        })
                    ) : (
                        <strong>Nenhuma imagem encontrada.</strong>
                    )
                )
                }
            </MainContent>
        </GalleryContainer>
    );
};
