import { createContext, useEffect, useState } from "react";
import { BookContextProps, BookProviderProps } from "../interfaces/BookContext";
import { GalleryData, Item, Photos, PhotosData } from "../interfaces/Api";
import { galleryAPI } from "../lib/axios";
import { toast } from "react-toastify";

export const BookContext = createContext({} as BookContextProps);

export function BookProvider({ children }: BookProviderProps) {
    const galaxya = 'galaxy';
    const [galleryData, setGalleryData] = useState<Item[]>([]);
    const [photosData, setPhotosData] = useState<Photos[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        searchGallery(galaxya);
    }, []);

    async function searchGallery(query?: string) {
        setLoading(true);
        try {
            const response = await galleryAPI.get<GalleryData>('', {
                params: {
                    q: query
                }
            });
            setGalleryData(response.data.collection.items);
        } catch (error) {
            toast.error('Ocorreu um erro ao pesquisar as imagens, por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    async function infoGallery(nasa_id: string) {
        setLoading(true);
        try {
            const response = await galleryAPI.get<PhotosData>('', {
                params: {
                    q: nasa_id
                }
            });
            setPhotosData(response.data.collection.items);
        } catch (error) {
            toast.error('Ocorreu um erro ao procurar as imagens.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <BookContext.Provider value={{ galleryData, loading, searchGallery, infoGallery, photosData, setLoading }}>
            {children}
        </BookContext.Provider>
    );
}
