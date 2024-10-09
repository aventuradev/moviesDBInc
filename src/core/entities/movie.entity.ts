

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;
}


export interface FullMovie extends Movie {
    genres: { id: number; name: string; }[];
    duration: number;
    budget: number;
    productionCompanies: string[];
    originalTitle: string;
}
