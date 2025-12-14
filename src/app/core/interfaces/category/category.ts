import { Pageable, Sort } from "../product/product";

export interface Category {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  createdBy: string;
  updatedBy: string | null;
  deletedBy: string | null;
  name: string;
  description: string;
  image: Image;
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

export type CategoryPage = Page<Category>;


