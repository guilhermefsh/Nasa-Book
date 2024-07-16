import React, { useEffect, useState } from "react";
import { FormContainer, MarsImages, SunDistance } from "./styles";
import { MarsApiResponse, MarsPhoto } from "../../../../interfaces/Api";
import { key, marsApi } from "../../../../lib/axios";
import { toast } from "react-toastify";
import { SpinnerContainer } from "../../../../styles/spinners/spinnersStyles";
import { RingLoader } from "react-spinners";
import { formatDate } from "../../../../utils/formatDate";
import Tilt from 'react-parallax-tilt';

export const SearchMR = () => {
    const [sol, setSol] = useState<number | string>('800');
    const [camera, setCamera] = useState<string>('FHAZ');
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        SearchMarsPhotos();
    }, [])

    const handleSolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSol(value ? parseInt(value) : '100');
    };

    const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCamera(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        SearchMarsPhotos();
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
                        <span>Distância: {sol}</span>
                    </div>
                </SunDistance>

                <select value={camera} onChange={handleCameraChange}>
                    <option value="FHAZ">Front Hazard Avoidance Camera</option>
                    <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                    <option value="MAST">Mast Camera</option>
                    <option value="CHEMCAM">Chemistry and Camera Complex</option>
                    <option value="MAHLI">Mars Hand Lens Imager</option>
                    <option value="MARDI">Mars Descent Imager</option>
                    <option value="NAVCAM">Navigation Camera</option>
                </select>
                <button type='submit'>BUSCAR</button>
            </FormContainer>

            {loading ? (
                <SpinnerContainer>
                    <RingLoader color="#510b96" loading={loading} />
                </SpinnerContainer>
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
