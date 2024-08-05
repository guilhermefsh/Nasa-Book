import { Dispatch, ReactNode, SetStateAction } from "react";
import { Item, Photos } from "./Api";

export interface BookContextProps {
    galleryData: Item[];
    photosData: Photos[];
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    searchGallery: (query?: string) => Promise<void>;
    infoGallery: (nasa_id: string) => Promise<void>;
}

export interface BookProviderProps {
    children: ReactNode;
}
