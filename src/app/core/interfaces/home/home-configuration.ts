
export interface IHomeConfiguration {
    idHome: string;
    idUserSaved: string;
    title: string;
    description: string;
    logoImage: File;
    typeBanner: TypeBanner[];
    createdAt: Date;
    updatedAt: Date;
}

export enum TypeBanner {
    CLASSIC = 'classic',
    CAROUSEL = 'carousel',
    
}