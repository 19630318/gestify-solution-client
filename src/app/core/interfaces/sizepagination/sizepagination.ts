type PaginationSize = 'small' | 'large';

export interface ListSettingsPagination {
    sizeComponent: PaginationSize;
    totalPages: number;
    currentPage: number;
}