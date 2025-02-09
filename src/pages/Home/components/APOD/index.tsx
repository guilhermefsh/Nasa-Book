import React, { useContext, useEffect, useState } from 'react';
import { ApodContainer, InfoApodContainer, SearchApod } from './styles';
import { toast } from 'react-toastify';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ApodData } from '../../../../interfaces/Api';
import { apodAPI } from '../../../../lib/axios';
import { Loader } from '../../../../components/Loader';
import { BookContext } from '../../../../contexts/BookContext';
import { ButtonComponent } from '../../../../components/button';

export const APOD = () => {
    const { loading, setLoading } = useContext(BookContext)
    const currentDate = new Date().toISOString().slice(0, 10);
    const [dateApod, setDateApod] = useState(currentDate);
    const [apodData, setApodData] = useState<ApodData | null>(null);


    useEffect(() => {
        searchApod();        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function searchApod() {
        setLoading(true);

        try {
            const response = await apodAPI.get('', {
                params: {
                    date: dateApod
                }
            });
            setApodData(response.data);

        } catch (error) {
            toast.error('Imagem do Dia atual ainda não foi atualizada, iremos carregar a do  anterior! ');

            const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10);
            try {
                const response = await apodAPI.get('', {
                    params: {
                        date: yesterday
                    }
                });
                setApodData(response.data);
                setDateApod(yesterday);

            } catch (error) {
                toast.error('Não foi possível carregar a imagem astronômica.');
            }

        } finally {
            setLoading(false);
        }
    }

    function handleSearchApod(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!dateApod) return;
        searchApod();
    }

    return (
        <ApodContainer>
            <SearchApod>
                <h4>IMAGEM ASTRONOMICA DO DIA!</h4>
                <form onSubmit={handleSearchApod}>
                    <input type="date" onChange={(e) => setDateApod(e.target.value)} value={dateApod} />
                    <ButtonComponent type='submit'>Buscar</ButtonComponent>
                </form>
            </SearchApod>
            <InfoApodContainer>
                {loading ? (
                    <Loader />
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <figure>
                            <Tilt><img src={apodData?.url} alt={apodData?.title || 'Nasa Image galaxy'} /></Tilt>
                        </figure>
                        <div>
                            <h4>{apodData?.title}</h4>
                            <p>{apodData?.explanation}</p>
                        </div>
                    </motion.div>
                )}
            </InfoApodContainer>
        </ApodContainer>
    );
};
