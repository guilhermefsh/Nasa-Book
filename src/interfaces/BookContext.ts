import { ReactNode } from "react";

export interface BookContextProps {
    galleryData: galleryData[];
    loading: boolean;
    searchGallery: (query?: string) => Promise<void>;
}

export interface BookProviderProps {
    children: ReactNode;
}