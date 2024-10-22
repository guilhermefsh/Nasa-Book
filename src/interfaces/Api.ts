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

export interface Photos {
    data: {
        title: string;
        date_created: string;
        description: string;
    }[];
    links: {
        href: string;
    }[];
}

export interface PhotosData {
    collection: {
        items: Photos[];
    };
}

export interface Data {
    nasa_id: string;
    title: string;
}

export interface Link {
    href: string;
}

export interface MarsPhoto {
    id: number;
    img_src: string;
    earth_date: string;
    sol: number;
    rover: {
        name: string;
    };
    camera: {
        name: string;
    };
}

export interface MarsApiResponse {
    photos: MarsPhoto[];
}