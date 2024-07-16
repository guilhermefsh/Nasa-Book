export interface ApodData {
    title: string;
    date: string;
    url: string;
    explanation: string;
}

export interface GalleryData {
    collection: {
        items: Item[];
    };
}

export interface Item {
    data: Data[];
    links: Link[];
}

export interface Data {
    nasa_id: string;
    title: string;

}

export interface Link {
    href: string;
}