import React, { ChangeEvent, useContext, useState } from 'react';
import { GalleryContainer, MainContent } from './styles';
import Tilt from 'react-parallax-tilt';
import { SpinnerContainer } from '../../styles/spinners/spinnersStyles';
import { RingLoader } from 'react-spinners';
import { BookContext } from '../../contexts/BookContext';
import { Item } from '../../interfaces/Api';

export const Gallery = () => {
    const { galleryData, searchGallery, loading } = useContext(BookContext);
    const [galleryImg, setGalleryImg] = useState('galaxy');

    function handleSearchGallery(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        searchGallery(galleryImg);
    }

    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        setGalleryImg(e.target.value);
    }

    return (
        <GalleryContainer>
            <h2>PESQUISE POR IMAGENS INCRÍVEIS!</h2>
            <form onSubmit={handleSearchGallery}>
                <input
                    type="text"
                    placeholder='galaxy'
                    required
                    onChange={handleImageChange}
                />
                <button type='submit'>Buscar</button>
            </form>
            <MainContent>
                {loading ? (
                    <SpinnerContainer>
                        <RingLoader color="#510b96" loading={loading} />
                    </SpinnerContainer>
                ) : (
                    galleryData.length > 0 ? (
                        galleryData.filter(item => item.links && item.links.length > 0).map((item: Item) => {
                            const { data, links } = item;
                            const nasa_id = data?.[0]?.nasa_id ?? 'nasa_id_missing';
                            const title = data?.[0]?.title ?? 'Sem Título';
                            const imageUrl = links[0].href;

                            return (
                                <picture key={nasa_id}>
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
