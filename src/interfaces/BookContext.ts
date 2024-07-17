import { ReactNode } from "react";

export interface BookContextProps {
    galleryData: galleryData[];
    photosData: photosData[];
    loading: boolean;
    searchGallery: (query?: string) => Promise<void>;
    infoGallery: (nasa_id: string) => Promise<void>;
}

export interface BookProviderProps {
    children: ReactNode;
}