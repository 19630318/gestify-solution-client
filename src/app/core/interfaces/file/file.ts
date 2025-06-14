
export interface File {
    idFile: string;
    idReference: string;
    name: string;
    type: TypeFile;
    description?: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum TypeFile {
    IMAGE = 'image',
    VIDEO = 'video',
    AUDIO = 'audio',
    PDF = 'pdf',
    DOC = 'doc',
    DOCX = 'docx',
    XLS = 'xls',
    XLSX = 'xlsx',
    PPT = 'ppt',
    PPTX = 'pptx',
}