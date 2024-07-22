import React, { useContext, useEffect, useState } from "react";
import { FormContainer, MarsImages, SunDistance } from "./styles";
import { MarsApiResponse, MarsPhoto } from "../../../../interfaces/Api";
import { key, marsApi } from "../../../../lib/axios";
import { toast } from "react-toastify";
import { formatDate } from "../../../../utils/formatDate";
import Tilt from 'react-parallax-tilt';
import { Loader } from "../../../../components/Loader";
import { BookContext } from "../../../../contexts/BookContext";
import { ButtonComponent } from "../../../../components/button";

export const SearchMR = () => {
    const [sol, setSol] = useState<number | string>('800');
    const [camera, setCamera] = useState<string>('FHAZ');
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const { loading, setLoading } = useContext(BookContext);

    useEffect(() => {
        SearchMarsPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSol(value ? parseInt(value) : '100');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await SearchMarsPhotos();
    };

    async function SearchMarsPhotos() {
        try {
            setLoading(true);
            const fetchMarsPhotos = (sol: number, camera?: string) => {
                return marsApi.get<MarsApiResponse>('', {
                    params: {
                        sol,
                        camera,
                        api_key: key
                    }
                });
            };
            const response = await fetchMarsPhotos(sol as number, camera);
            const filteredPhotos = response.data.photos.filter(photo => photo.img_src);
            setPhotos(filteredPhotos);
            setLoading(false);
        } catch (error) {
            toast.error('Erro ao buscar fotos');
            setLoading(false);
        }
    }

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <SunDistance>
                    <input
                        type="range"
                        min="100"
                        max="1700"
                        value={sol}
                        onChange={handleSolChange}
                        required
                    />
                    <div>
                        <span>Distância do sol: {sol}</span>
                    </div>
                </SunDistance>

                <select value={camera} onChange={(e) => setCamera(e.target.value)}>
                    <option value="FHAZ">Front Hazard Avoidance Camera</option>
                    <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                    <option value="MAST">Mast Camera</option>
                    <option value="CHEMCAM">Chemistry and Camera Complex</option>
                    <option value="MAHLI">Mars Hand Lens Imager</option>
                    <option value="MARDI">Mars Descent Imager</option>
                    <option value="NAVCAM">Navigation Camera</option>
                </select>
                <ButtonComponent type='submit'>BUSCAR</ButtonComponent>
            </FormContainer>

            {loading ? (
                <Loader />
            ) : (
                <MarsImages>
                    {photos.length === 0 ? (
                        <p>Nenhuma imagem encontrada</p>
                    ) : (
                        photos.map(photo => (
                            <Tilt key={photo.id}>
                                <figure>
                                    <img src={photo.img_src} alt={`mars rover ${photo.rover}`} />
                                    <figcaption>{formatDate(photo.earth_date)}</figcaption>
                                </figure>
                            </Tilt>
                        ))
                    )}
                </MarsImages>
            )}

        </>
    );
};

export default SearchMR;
