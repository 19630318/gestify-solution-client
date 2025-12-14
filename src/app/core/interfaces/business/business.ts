import { Pageable, Sort } from "../product/product";

 export interface Business {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    createdBy: string;
    updatedBy: string | null;
    deletedBy: string | null;

    name: string;
    description: string;
    logo: Image;

    rfc: string;
    establishmentDate: string;

    active: boolean;
    activeChangedBy: string | null;
    activeChangedAt: string | null;

    industry: Industry;
    businessesType: BusinessType;
    taxRegimen: TaxRegimen;
}

export interface TaxRegimen {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    createdBy: string;
    updatedBy: string | null;
    deletedBy: string | null;
    regimen: string;
    description: string;
}

export interface BusinessType {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    createdBy: string;
    updatedBy: string | null;
    deletedBy: string | null;
    code: string;
    type: string;
    description: string;
}

export interface Industry {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    createdBy: string;
    updatedBy: string | null;
    deletedBy: string | null;
    industry: string;
    description: string;
}

export interface Image {
    id: number;
    key: string;
    name: string;
    extension: string;
    size: number;
    blurHash: string;
    path: string;
    url: string;
    contentType: string;
    bucket: string;
    createdAt: string;
}

export interface Page<T> {
    totalElements: number;
    totalPages: number;
    pageable: Pageable;
    first: boolean;
    last: boolean;
    size: number;
    content: T[];
    number: number;
    sort: Sort;
    numberOfElements: number;
    empty: boolean;
}

export type BusinessPage = Page<Business>;