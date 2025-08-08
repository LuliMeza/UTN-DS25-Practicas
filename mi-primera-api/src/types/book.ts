export interface Book {
    id: number;          
    titulo: string;
    autor: string;
    categoria: string;
    descripcion: string;
    imagen: string;
    createdAt?: Date | undefined;
}

export interface CreateBookRequest {
    id: number;          
    titulo: string;
    autor: string;
    categoria: string;
    descripcion: string;
    imagen: string;
}

export interface UpdateBookRequest {        
    titulo?: string;
    autor?: string;
    categoria?: string;
    descripcion?: string;
    imagen?: string;
}

export interface BookResponse {
    book:Book;
    message: string;
}

export interface BooksListResponse {
    books: Book[];
    total: number;
}