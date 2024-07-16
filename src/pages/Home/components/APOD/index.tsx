import React, { ChangeEvent, useEffect, useState } from 'react';
import { ApodContainer, InfoApodContainer, SearchApod, SpinnerContainer } from './styles';
import { ApodData } from '../../../../interfaces/apoddata';
import { apodAPI } from '../../../../lib/axios';
import { RingLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export const APOD = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const [dateApod, setDateApod] = useState(currentDate);
    const [apodData, setApodData] = useState<ApodData | null>(null);
    const [loading, setLoading] = useState(false);

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
            toast.error('Imagem do Dia atual ainda não foi atualizada, iremos carregar do dai anterior! ' + error);
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

    function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
        setDateApod(e.target.value);
    }

    return (
        <ApodContainer>
            <SearchApod>
                <h4>IMAGEM ASTRONOMICA DO DIA!</h4>
                <form onSubmit={handleSearchApod}>
                    <input type="date" onChange={handleDateChange} value={dateApod} />
                    <button type="submit">Buscar</button>
                </form>
            </SearchApod>
            <InfoApodContainer>
                {loading ? (
                    <SpinnerContainer>
                        <RingLoader color="#510B96" loading={loading} />
                    </SpinnerContainer>
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
