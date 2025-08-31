import { Categoria } from '../generated/prisma/index';

export interface Book {
    id: number;          
    title: string;
    autor: string;
    categoria: Categoria;
    descripcion: string;
    imagen: string;
    createdAt?: Date;
}

export interface CreateBookRequest {       
    title: string;
    autor: string;
    categoria: Categoria;
    descripcion: string;
    imagen: string;
}

export interface UpdateBookRequest {        
    title?: string;
    autor?: string;
    categoria?: Categoria;
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