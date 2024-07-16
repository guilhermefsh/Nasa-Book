import React, { ChangeEvent, useEffect, useState } from 'react';
import { GalleryContainer, MainContent } from './styles';
import { galleryAPI } from '../../lib/axios';
import { GalleryData, Item } from '../../interfaces/Api';
import { toast } from 'react-toastify';
import Tilt from 'react-parallax-tilt';
import { SpinnerContainer } from '../../styles/spinners/spinnersStyles';
import { RingLoader } from 'react-spinners';

export const Gallery = () => {

    const [galleryImg, setGalleryImg] = useState('galaxy');
    const [galleryData, setGalleryData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        searchGallery(galleryImg); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function searchGallery(galleryImg: string) {
        setLoading(true);
        try {
            const response = await galleryAPI.get<GalleryData>('', {
                params: {
                    q: galleryImg
                }
            });
            console.log('API Response:', response.data);
            setGalleryData(response.data.collection.items);
        } catch (error) {
            console.error('API Error:', error);
            toast.error('Ocorreu um erro ao pesquisar as imagens, por favor, busque novamente');
        } finally {
            setLoading(false);
        }
    }

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
